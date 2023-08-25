require("dotenv").config();

const mysql = require("mysql2");
const express = require("express");
//config
const configViewEngine = require("./Config/viewEngine");
const webRouter = require("./Routes/web");

//config template
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//ejs
configViewEngine(app);

//router
app.use("/", webRouter);

//Tesst connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "mydatabase",
});

connection.query(
  "SELECT * from User",

  function (err, result, fields) {
    console.log(result);
    console.log(err);
    console.log(fields);
  }
);
//run
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
