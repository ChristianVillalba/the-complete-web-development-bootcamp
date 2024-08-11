# PostgreSQL

Notes and projects based on: PostgreSQL        
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description
      

## Notes

### PostgreSQL

Open Source Relational Database Management System (RDBMS).     
* Postgres is one of the top most used database management systems 
* Free & Open Source 
* Great Community Support
* The code that's required to use Postgres is also incredibly simple
    * There are special **packages** set up to use **Postgres** with **Node**
    * Requires [**node-postgres** package](https://www.npmjs.com/package/pg)
    * `npm install pg`
        ```javascript
            // You can imagine the Postgres database as a server of its own 
            import Client from "pg"; // from the postgree package. Allows db. queries

            // The first: create a const called db, and this contains all of the details to connect to our PostgresDB.
            const db = new Client({
                user: "username",
                host: "localhost",
                database: "mydatabase",
                password: "password",
                port: 1234,
            });

            db.connect(); // starts database connection

            // SQL code & Error Handling 
            db.query("SELECT * FROM users", (err, res) => {
                if (err) {
                    console.error("Error executing query", err.stack);
                } else {
                    console.log("User data:", res.rows); // if there is no errors, output all the (users) rows
                }
                db.end(); // ends database connection
            });
        ```

### Requirements to use Postgree
* Postgres Server
    * To use postgres in our local computer
    * Not necessary for remote server
* pgAdmin
    * UI to tap into our Postgres Server (instead of command line)

### Use pgAdmin to CREATE a TABLE
**.csv file** : comma separated vales
* First line: header
* Next lines: data

* **Creating** a Table: pgAdmin (v4)
    * Open pgAdmin (may require a password - the one we created when installed pgAdmin)
    * Servers > Databases (right click) > create > Database...
    * Database (MyName) + Owner (postgres - default) + Comment (optional)
        * Check: *Database Name* > Schemas > public > **Tables (empty)**
    * Selecting our created Database > ▤ query tool 
    * Query:
        ```sql
        CREATE TABLE capitals (
            id SERIAL PRIMARY KEY, /* all the id's are unique */ 
            country VARCHAR (64),  /* (x) limits the num of char */ 
            capital VARCHAR (64)   /* No , after the final column  */ 
        );                         /* dont forget the ; */ 
            ```
    * ▶ (Execute/Refresh)
        * "CREATE TABLE Query returned successfully in 74 msec."
        * Check: *Database Name* > Schemas > public > Tables (1) > **capitals**
        * Check: capitals (right click) > View/ Edit Data > All rows (HEADER created, emtpy rows)
        * Query (done by pgAdmin): 
            ```sql
            SELECT * FROM public.capitals
            ORDER BY id ASC                      
            ```
* **Importing** data to our table:
    * Importing ***capitals.csv*** into the table ***capitals*** we just created using pgAdmin
        * Location Reminder: *Database Name* > Schemas > public > Tables (1) > **capitals**
        * Right click on table: **capitals** > Import/Export Data >> Import/Export Window:
        * General Tab: 
            * ( ✓ Import)  
            * Select Filename (Open)
            * Format: csv
        * Options: 
            * Header ( ✓ ) *Confirms that the first data is the header, not data.*
        * Coulumns
            * Check: The names have been auto imported (id, country, capital)
            * ⚠️ The names of the fields in the table we created, must exact match the header of what are going to import.
            * Eg: Imported data has no id
                * If our table has more columns that the data we are going to import:
                    * Delete/Press-Cross
                    * We rely on Postgres to autogenerate it
    * In case we need to reedit fields in the table we created:
        * Tables> **capitals** > Right click > properties > Columns > *edit* > Save
        * Ready to be imported again.
        
### READ data from a Postgres database

* Project Exercise: WorldCapitalQuiz
    * *Note: navigate to the file path and to install all the Node modules:* `npm i`
    * *Note: navigate to the file path and to install pg package:* `npm i pg`
* `Select * FROM nameOfTable`
    * to read from our SQL database...
    * But in order to implement it in our Node and Express backend:
```sql
-- Import module
import pg from "pg";

-- Define a new client and configure it
const db= new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "y0uRp@$Sw0r1D",
    port: 5432,   // Default postgres port
});

-- Starts the connection defined above
db.connect();

-- sql
db.query("Select * FROM nameOfTable", (err,res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        quiz = res.rows;
    }
    db.end();
});
```

### Query data using SELECT, WHERE, and LIKE
    
* Now that we've added our data into a database and created that new table, 
* Select table > QueryTool 
* `SELECT` **to select or query values** from the table.
    * `SELECT * FROM nameOfTable`
        * Select all
    * `SELECT this_column FROM this_table`
    * `SELECT one_column, other_column FROM this_table`
* `WHERE` to provide some **conditions** to check against before we pull up our data
    * Single quotes `'` to represent string
    * `SELECT rice_production FROM world_food WHERE country = 'United States'`  
    * `SELECT country FROM world_food WHERE wheat_production < 20`
* `WHERE LIKE` to match only a specific part of our data
    * `SELECT this_column FROM this_table WHERE this_column LIKE pattern`
        * `%` to represent "Any Value"
        * `||` merge patterns
    * `SELECT country FROM world_food WHERE country LIKE 'U' || '%'` // or U%
        * Starts with "U" + "Any Value" = Ukranie, United States
    * `SELECT country FROM world_food WHERE country LIKE '%' || 'a'` // or %a
        * Starts with "Any Value" + ends with "a" = Australia, China, Ethiopia, India

### NOT NULL & UNIQUE 
* `NOT NULL` 
    * Missing or empty values are not allowed
    * Attemps to add NULL will produce an ERROR
* `UNIQUE`
    * Value con not be repeated in the table.
    * No other value stored can be the same (avoid duplicates).       
       
```sql
CREATE TABLE visited_countries(
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) NOT NULL UNIQUE  
);
```

***NOTE: TravelTracker Project***
```js
// index.ejs
<script>
const country_codes = "<%= countries %>".split(",") 
console.log(typeof ("<%= countries %>"))
country_codes.forEach(code => {
    document.getElementById(code).style.fill = 'teal'
});
</script>
```
* `"<%= countries %>".split(",")`
* `.split(",")` why to use it:
    * EJS does templating: inserting a template string.
    * We're getting a string here and not a JS code, or JS array as we would expect.
    * we're treating it as a string, we split the string using `,` because arrays are formatted with `,`
            
```js
app.get("/", async (req, res) => {

  // query for the places we visited. Its a query
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = []; 

  // the result of the query is an array with JS Objects. we will use a forEach loop to access them
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });     // access every value returned for the query and push it to the empty array: countries
  console.log(result.rows); // not neccessary but useful to check how the strucure of the data looks like
  res.render("index.ejs", { countries: countries, total: countries.length });
  
  db.end();    // close the connecton to the database
});
```

### INSERT & Add Data

SQL 
```sql
INSERT INTO tableName (column1, column2, column3)
VALUES (value1, value2)
-- example
INSERT INTO world_food (country, rice_production, wheat_production)
VALUES ('Italy', 1.34, 5.3)
```
When we write SQL queries and we use the INSERT INTO command, this is how we insert values.     
And the reason is because our values are hard coded, we already know what the values should be.     
                        
Javascript      
```javascript
db.query(INSERT INTO tableName (column1, column2, column3)
VALUES (value1, value2))
// example
db.query(
"INSERT INTO world_food (country, rice_production, wheat_production)
VALUES ($1, $2, $3)",
['Italy', 1.34, 5.3]
);
```
But when we do this in our Node back-end, we're going to be using db.query() 
* That comes from the pg NPM package.
* It allows us to insert two parameters:
    * SQL command
    * Any values that we want to insert into the SQL command.
* This allows us to do is to insert not just hard-coded values but also variables, constants, or expressions
* We achieve this by:
    * Inside the query: `"queryBetweenDoubleQuotes"`
    * we add placehoders `$1, $2, $3` as `VALUES`
    * Then, we add an **array** after the query 
    * It will countain the expressions or var that will **replace the placeholders** (in order)

### UPDATE & DELETE

* ALTER: to change the schema of your table.
    * eg: Adds a particular constraint
    * eg: Change (add/deelte) a column
```sql
ALTER TABLE student
    RENAME TO user;
ALTER TABLE user
    ALTER COLUMN first_name TYPE VARCHAR(64); -- Change data type
ALTER TABLE contact_detail
    ADD email TEXT;  -- Adds a new column  
ALTER TABLE visited_countries
    ADD UNIQUE (user_id, country_code);  -- Adds a constrain
```
* UPDATE: update a particular piece of data: 
```sql
UPDATE myTable
SET this_column = newValue -- name = "Willy"
WHERE condition -- eg: id=3
```
* ORDER BY: retrieve data from our database ordered by some sort of condition.
```sql
SELECT *
FROM myTable
ORDER BY condition -- eg: ID ASC / ID DESC
```
* ORDER BY: retrieve data from our database ordered by some sort of condition.
```sql
SELECT *
FROM myTable
ORDER BY condition -- eg: ID ASC / ID DESC
```
* DELETE: deletes data
```sql
DELETE FROM myTable
WHERE condition -- eg= if=5 / user_id=3 AND country_code='FR'
```
* DROP: deletes an entire table
```sql
DROP TABLE IF EXISTS visitied_countries, user;
```


### Relationships Types  
* Relationships are a big aspect of SQL databases 
    * One to One
    * One to Many
    * Many to Many relationships

### One to One
* Databases are optimized to have many records (rows),    
    but they can struggle when you have too many fields (columns).
* One way of **splitting a table**: a One to One relationship.
```sql
CREATE TABLE friends (
    id SERIAL PRIMARY KEY, /* all the id's are unique */ 
    fName TEXT (64),  /* (x) limits the num of char */ 
    lName TEXT (64)   /* No , after the final column  */ 
);    
```
```sql
CREATE TABLE contact_detail (
    id INTEGER REFERENCES sutdent(id) UNIQUE, 
    phone TEXT (64),  
    address TEXT (64)
);    
```
* The **REFERENCES** keyword in Postgres which sets a field as a FOREIGN KEY.
* **INNER JOIN:** Joining tables using SQL:
```sql
SELECT *
FROM student
JOIN contac_detail
ON friend.id = contact_detail.id
    -- pk           fk--
-- The resultwill be a table that countains all the fields in both tables 
--(friends+contact_details)
```

### One to Many
* It occurs very frequently in data storage
* One parent can have multiple childs    
    The childs can only have one parent
    * One user can have multiple post.    
    All the post can be associated only to a single user.
* Each child has a primary key
    * The foreing key will be field that links back to the parent 
* Many to one would be the same relationship using the childs as reference
```sql
CREATE TABLE student (
    id SERIAL PRIMARY KEY, /* all the id's are unique */ 
    fName TEXT (64),  /* (x) limits the num of char */ 
    lName TEXT (64)   /* No , after the final column  */ 
);    
```
```sql
CREATE TABLE homework (
    id SERIAL PRIMARY KEY, --pk
    student_id INTEGER REFERENCES student(id) --fk target table(field)
    mark INTEGER,  
);    
```
* ***Note:*** to join tables, student_id needs to match student(id)
```sql
SELECT * --student.id, fName, lName, mark //don't repeat data ids:pk,fk
FROM student
JOIN homework
ON student.id = student_id
    -- pk           fk--
-- The resultwill be a table that countains all the fields in both tables 
--(friends+contact_details)
```
### Many to Many relationships
* One of the most complex and least used types of relationships.
* Multiple records in one table are associated with multiple records in another table. 
    * Eg: Students and courses    
    Each student can take multiple courses, and each course can have multiple students.
And this type of relationship does happen occasionally in our data storage needs.
* Postgres: usually , we create a table that represents just that relationship.
    * We can't represent the relationship alone using a single relationship
```sql
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    fName TEXT (64), 
    lName TEXT (64)   
);    
```
```sql
CREATE TABLE class (
    id SERIAL PRIMARY KEY,  
    title TEXT (64),  
);    
```
```sql
CREATE TABLE enrollement (
    student_id INTEGER REFERENCES student(id),
    class_id INTEGER REFERENCES class(id),
    SERIAL PRIMARY KEY(student_id , class_id) 
);    
```
* Now we can use JOIN keyword:
```sql
SELECT * 
FROM enrollment
JOIN student ON student.id = enrollment.student_id
JOIN class ON class.id = enrollment.class_id
-- table.field = relationshipTable.table_id
--  pk = fk // they match in order to get the same student/class
```

### ALIASES
* Alias command: establish an alias -alternative name- using the AS keyword.
* Queries using Aliases
    * This is helpful when you want to search through tables that has many different fields called "id" 
```sql
SELECT student.id AS stud, first_name, last_name, title 
-- when it generates the final table, it's going to rename student.id field into stud.
```
* Shorten & simplyfy queries:  
    * We can set aliases for our tables
```sql
SELECT s.id AS stud, first_name, last_name, title 
FROM enrollment AS e
JOIN student AS s On s.id = e.student_id
JOIN class AS c ON c.id = e.class_id
```
* Omitting the AS keyword:
    * AS keyword is actually completely optional.
    * ***Recommendation:*** Keep using AS
```sql
SELECT s.id stud, first_name, last_name, title 
FROM enrollment e
JOIN student s On s.id = e.student_id
JOIN class c ON c.id = e.class_id
```


## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

