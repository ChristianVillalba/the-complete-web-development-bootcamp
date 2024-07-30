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
  password: "123546", // remember to change your password
  port: 5432,
});
// connects our database
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// split out the function that checks for all of the countries in our visited_countries
async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// homepage
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try { // try-catch block: Look for a country_name that matches what the user put into the input...
    const result = await db.query(
      // using WHERE LIKE in order to create column-value pattern matches '%' || $1 || '%';
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()] // this + LOWER(country_name) produce matches when casing is wrong
    );
    const data = result.rows[0];
    const countryCode = data.country_code;

    try { //second try-catch block: country_code has to be unique, so if this already exists:
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");

    } catch (err) {
      console.log(err);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.", //if the country already exists, pass this error
      });
    }

  } catch (err) { // if "try" fails, catch block, and log that error, but grab all the countries that are already visited.
    // Passing over the countries and countries.length & an error message:
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

