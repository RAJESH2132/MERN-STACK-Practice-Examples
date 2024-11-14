const mysql = require("mysql");

// Setting up connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ishop",
});

// Connecting to the database
connection.connect((err) => {
  if (!err) {
    console.log("Connected to database Successfully");
  } else {
    console.error("Error connecting to database:", err.stack);
  }
});

// Data to insert (multiple rows)
const products = [
  [4, "mobile", "104", 5],
  [5, "laptop", "105", 10],
  [6, "tablet", "106", 8],
];

// Inserting multiple rows into the 'products' table
connection.query(
  "INSERT INTO products (productid, productName, productCode, Qty) VALUES ?",
  [products],
  (error, results) => {
    if (!error) {
      console.log(
        "Data inserted into Table:",
        results.affectedRows,
        "rows affected."
      );
    } else {
      console.error("Error inserting data into table:", error.stack);
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
