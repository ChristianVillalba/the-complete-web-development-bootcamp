import express from "express";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
    console.log("Reqest method: ", req.method);
    console.log("Reqest URL: ", req.url);
    next();
  };
  

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
