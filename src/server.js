const express = require("express");
const path = require("path");

require("dotenv").config();

//config template
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//config file
app.use(express.static(path.join(__dirname, "public")));

//ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.render("sample.ejs");
});

//run
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
