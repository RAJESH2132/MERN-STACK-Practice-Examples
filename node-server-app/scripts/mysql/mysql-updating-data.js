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

// Data to update
const updatedProduct = {
  productName: "smartphone",
  Qty: 10,
};
const productId = 4; // ID of the product to update

// Updating data in the 'products' table
connection.query(
  "UPDATE products SET ? WHERE productid = ?",
  [updatedProduct, productId],
  (error, results) => {
    if (!error) {
      console.log(
        "Data updated successfully:",
        results.affectedRows,
        "row(s) affected."
      );
    } else {
      console.error("Error updating data:", error.stack);
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
