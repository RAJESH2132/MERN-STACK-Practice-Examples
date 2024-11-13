var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017").then((client_object) => {
  var database = client_object.db("products");
  database
    .collection("products")
    .updateOne({ id: 1 }, { $set: { description: "Updated data from Node" } })
    .then(() => {
      console.log(`Record Updated Successfully`);
    });
});
