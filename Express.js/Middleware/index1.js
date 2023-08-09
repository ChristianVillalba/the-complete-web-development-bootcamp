// USING BODY-PARSER

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// create dynamically a path
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// body-parser as middleware
app.use(bodyParser.urlencoded({ extended: true }))
// bodyParserwe.urlencode : we tell what data we want to parse - an HTML FORM
// { extended: true } : OBLIGATORY OPTION. 
// just determines what is being used behind the scenes to pass the data that's coming in.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Now every single request has a "body" - 
// in Postman App > body > x-www-form-urlencoded 
// if we stop using bodyParser, our POST request will be "undefined"
app.post('/submit', (req, res) => {
  console.log(req.body);
}) 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  // to check full path
  console.log(__dirname + "/public/index.html")
});
