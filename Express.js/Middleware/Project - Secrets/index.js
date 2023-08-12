//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
// to get the FULL PATH:
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var userIsAuthorised = false;

const passwordChecker = (req, res, next) => {
  const accessPassword = "ILoveProgramming";
  const userPassword = req.body["password"];
    if (accessPassword === userPassword){
      userIsAuthorised = true;
    };
    next();
  };
  
app.use(passwordChecker);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

// Subbmit handler
app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
