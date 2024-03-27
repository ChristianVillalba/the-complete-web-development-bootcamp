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

###  Use pgAdmin to CREATE a TABLE
.csv comma separated vales


## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

