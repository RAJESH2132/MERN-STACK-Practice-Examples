var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017").then((client_object) => {
  var database = client_object.db("products");
  database
    .collection("products")
    .deleteOne({ id: 1 })
    .then(() => {
      console.log("Record Deleted Successfully");
    });
});
