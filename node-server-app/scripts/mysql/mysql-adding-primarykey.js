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

// Add a primary key to the 'productid' column
const addPrimaryKeyQuery = "ALTER TABLE products ADD PRIMARY KEY (productid)";

connection.query(addPrimaryKeyQuery, (error) => {
  if (!error) {
    console.log("Primary key added successfully.");
  } else {
    console.error("Error adding primary key:", error.stack);
  }
});

// Closing the connection
connection.end((err) => {
  if (!err) {
    console.log("Connection closed.");
  } else {
    console.error("Error closing the connection:", err.stack);
  }
});
