import express from "express";

const app = express();
const port = 3000;

// // Get the day of the week and an advice
const date = new Date();
const dayIndex = date.getDay();
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
let todayIs = daysOfTheWeek[dayIndex];
let sevenAdvices = [
  "The distance between dreams and reality is called action.", 
  "Don't take life for granted.", 
  "Never give up. Keep going.", 
  "You only fail if you quit.",
  "It's important to give all you have while you have the chance.", 
  "Don't look back. You are not going that way.",
  "If you don't go after what you want, you'll never have it."
];
let adviceOfTheDay = sevenAdvices[dayIndex]

app.get("/", (req, res) => {
    res.render("index.ejs", { 
      todayIs: todayIs,
      advice: adviceOfTheDay,
    }); 
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
