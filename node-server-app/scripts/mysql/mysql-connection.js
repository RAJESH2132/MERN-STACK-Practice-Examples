const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ishop",
});
connection.connect((error) => {
  if (!error) {
    console.log("Connected to Mysql Successfully");
  } else {
    console.log(error);
  }
});
