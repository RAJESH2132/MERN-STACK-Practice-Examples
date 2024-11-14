const mysql = require("mysql");

//Setting up connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ishop",
});

//Connecting to database
connection.connect((err) => {
  if (!err) {
    console.log("Connected to database Successfully");
  } else {
    console.error("Error connecting to database:", err.stack);
  }
});

//Data to insert
const product = {
  productid: 4,
  productName: "mobile",
  productCode: "104",
  Qty: 5,
};

//Inserting data into table
connection.query("INSERT INTO products SET ?", product, (error) => {
  if (!error) {
    console.log("Data inserted into Table");
  } else {
    console.error("Error inserting data into table:", error.stack);
  }
});

// Close the connection
connection.end((err) => {
  if (!err) {
    console.log("Connection closed.");
  } else {
    console.error("Error closing the connection:", err.stack);
  }
});
