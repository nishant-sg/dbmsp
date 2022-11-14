const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce",
});

connection.connect(function (err) {
  if (!err) {
    console.error(err);
  } else {
    console.log("Database connected");
  }
});

module.exports = connection;
