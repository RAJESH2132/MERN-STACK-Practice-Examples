const mysql = require("mysql");

// Setting up the connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ishop",
});

// Connecting to the database
connection.connect((err) => {
  if (!err) {
    console.log("Connected to database successfully");
  } else {
    console.error("Error connecting to database:", err.stack);
  }
});

// ID of the product to delete
const productId = 4;

// Deleting data from the 'products' table
connection.query(
  "DELETE FROM products WHERE productid = ?",
  [productId],
  (error, results) => {
    if (!error) {
      console.log(
        "Data deleted successfully:",
        results.affectedRows,
        "row(s) deleted."
      );
    } else {
      console.error("Error deleting data:", error.stack);
    }
  }
);

// Closing the connection
connection.end((err) => {
  if (!err) {
    console.log("Connection closed.");
  } else {
    console.error("Error closing the connection:", err.stack);
  }
});
