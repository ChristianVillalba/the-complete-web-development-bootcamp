import express from "express";

const app = express();
const port = 3000;

// // Get the day of the week
const date = new Date();
const dayIndex = date.getDay();
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
let todayIs = daysOfTheWeek[dayIndex];

app.get("/", (req, res) => {
    res.render("index.ejs", { 
      todayIs: todayIs,
      advice: "Drink water",
    }); 
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
