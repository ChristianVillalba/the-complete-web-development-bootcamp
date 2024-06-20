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
    * To use Postgrees in our local computer
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
    * Database (MyName) + Owner (postgrees - default) + Comment (optional)
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
        * Check: capitals (right click) > > View/ Edit Data > All rows (HEADER created, emtpy rows)
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
                    * Delete/PressCross we're relying on Postgres to autogenerate it
                    * We rely on Postgres to autogenerate it
    * In case we need to reedit fields in the table we created:
        * Tables> **capitals** > Right click > properties > Columns > *edit* > Save
        * Ready to be imported agian.
        
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
    user: "postgrees",
    host: "localhost",
    database: "world",
    password: "y0uRp@$Sw0r1D",
    port: 5432,   // Default postgrees port
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
* `NOT NULL`
    * Value con not be repeated in the table.
    * No other value stgored can be the same (avoid duplicates).       
       
```sql
CREATE TABLE visited_countries(
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) NOT NULL UNIQUE,  
);
```

***NOTE: TravelTracker Project***
```js
/// index.ejs
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
  // the result of the query is an array with JS Objects. we will use a forEach loop to access them
  let countries = [];
  result.rows.forEach((country) => {
    // access every value returned for the query and push it to the empty array: countries
    countries.push(country.country_code);
  });
  console.log(result.rows); // not neccessary but useful to check how the strucure of the data looks like
  res.render("index.ejs", { countries: countries, total: countries.length });
  // close the connecton to the database
  db.end();
});

```

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

