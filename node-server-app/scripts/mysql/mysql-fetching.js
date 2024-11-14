var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ishop",
});

//connecting to database
connection.connect((error) => {
  if (!error) {
    console.log("Connected to database Successfully");
  } else {
    console.error("Error connecting to the database:", error.stack);
  }
});

//querying
connection.query("SELECT * FROM products", (error, results, fields) => {
  if (!error) {
    console.log(results);
    console.log(fields);
  } else {
    console.error("Error executing query:", error.stack);
  }
});

//Closing Connection
connection.end((error) => {
  if (!error) {
    console.log("Connection Closed....");
  } else {
    console.error("Error closing the connection:", error.stack);
  }
});
