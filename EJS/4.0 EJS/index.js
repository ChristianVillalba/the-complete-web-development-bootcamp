import express from "express";

const app = express();
const port = 3000;

const date = new Date();
const dayIndex = date.getDay();
let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday", "Sunday" ]
let todayIs = daysOfTheWeek[dayIndex];

app.get("/", (req, res) => {
    res.render("index.ejs"), // specifies file
    { todayIs: req.body["todayIs"] } // adds js Object with properties
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  