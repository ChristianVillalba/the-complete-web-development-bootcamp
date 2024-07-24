import express from "express";
import bodyParser from "body-parser";

// importing postgrees
import pg from "pg";

const app = express();
const port = 3000;

// Set up the configuration for our database
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "213456", // remember to change your password
  port: 5432,
});
// connects our database
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {     // access Homepage (/)
  // query for the places we visited. It's a query
  const result = await db.query("SELECT country_code FROM visited_countries");     // the result of the query is an array with JS Objects. we will use a forEach loop to access them
  
  let countries = [];
  result.rows.forEach((country) => {     // access every value returned for the query and push it to the empty array: countries
    countries.push(country.country_code);
  });
  console.log(result.rows); // not neccessary but useful to check how the strucure of the data looks like
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();   // close the connecton to the database
});

app.post("/add", async (req, res) => {  // new route > index.ejs > form - /add
  const input = req.body["country"];   // index.ejs > input: name = "country".  We use the input to make a query to our DB. and store it inside result 
  const result = await db.query(    
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]   // changes the placeholder $1 for the user's input
  );
  // result.rows contains what are we looking for  if the result.rows is actually empty, it means we got a no match from this query.
  if (result.rows.length !== 0) {      // if we have a match !==0 , then we continue and grab the data
    const data = result.rows[0];      // we place the data at the first position of the row ...
    const countryCode = data.country_code;     // we get the country_code that is inside that piece of data
    // we have to country_code that matches users' input, we make another query:
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", // this query allow us to us INSERT
      [countryCode]
    );
    res.redirect("/");  // redirects to HOMEPAGE
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

