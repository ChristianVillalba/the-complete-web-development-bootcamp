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
  // remember to change your password
  password: "y0uRp@$Sw0r1D",
  port: 5432,
});
// connects our database
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// give access to the Homepage (/)
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

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );

  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// //INSERT new country
// app.post("/add", async (req, res) => {
//   const input = req.body["country"];

//   const result = await db.query(
//     "SELECT country_code FROM countries WHERE country_name = $1",
//     [input]
//   );

//   if (result.rows.length !== 0) {
//     const data = result.rows[0];
//     const countryCode = data.country_code;

//     await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
//       countryCode,
//     ]);
//     res.redirect("/");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
