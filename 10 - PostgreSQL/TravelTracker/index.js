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
// app.post("/add", async (req, res) => {
//   const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
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
        error: "Country has already been added, try again.",
      });
    }
  } catch (err) {
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

// STARTS HERE



// // GET home page

//INSERT new country
// app.post("/add", async (req, res) => {
//   const input = req.body["country"];

//   try {
//     const result = await db.query(
//       "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
//       [input.toLowerCase()]
//     );

//     const data = result.rows[0];
//     const countryCode = data.country_code;
//     try {
//       await db.query(
//         "INSERT INTO visited_countries (country_code) VALUES ($1)",
//         [countryCode]
//       );
//       res.redirect("/");
//     } catch (err) {
//       console.log(err);
//       const countries = await checkVisisted();
//       res.render("index.ejs", {
//         countries: countries,
//         total: countries.length,
//         error: "Country has already been added, try again.",
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     const countries = await checkVisisted();
//     res.render("index.ejs", {
//       countries: countries,
//       total: countries.length,
//       error: "Country name does not exist, try again.",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
