var mongoClient = require("mongodb").MongoClient;

mongoClient
  .connect("mongodb://127.0.0.1:27017")
  .then((client_object) => {
    var database = client_object.db("products");
    database
      .collection("products")
      .find({})
      .toArray()
      .then((documents) => {
        console.log(JSON.stringify(documents));
      });
  })
  .catch((error_object) => {
    console.log(error_object);
  });
