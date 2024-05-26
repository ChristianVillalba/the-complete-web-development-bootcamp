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
            capital VARCHAR (64)
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
    * In case we need to reedit fields in the table we created:
        * Tables> **capitals** > Right click > properties > Columns > *edit* > Save
        * Ready to be imported agian.
        
### READ data from a Postgres database

* Project Exercise: WorldCapitalQuiz
* `Select * FROM nameOfTable`
    * to read from our SQL database...
    * But in order to implement it in our Node and Express backend:
```sql
import pg from "pg";

const db= new pg.Client({
    user: "postgrees",
    host: "y0uRp@$Sw0r1D",
    database: "world",
    password: "123456",
    port: 5432,
});

db.connect();

//sql
db.query(Select * FROM nameOfTable, (err,res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        quiz = res.rows;
    }

    db.end();
});
```
* We are going to create a WorldCapitalQuiz
* *Note: navigate to the file path and to install all the Node modules:* `npm i`


    





## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

