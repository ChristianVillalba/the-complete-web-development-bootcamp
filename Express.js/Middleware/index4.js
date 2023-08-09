import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// to get the FULL PATH:
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));


// ROUTE HANDLERS

// Shows Form (requires FULL PATH)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Subbmit handler
app.post('/submit', (req, res) => {
  console.log(req.body);
}) 

// Returns Band Name with the user's input
// app.get("/submit", (req, res) => {
//   res.send($`` $``);
// });


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
