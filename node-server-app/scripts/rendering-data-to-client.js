const http = require("http");
const mongoClient = require("mongodb").MongoClient;

http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "application/json" });
    mongoClient
      .connect("mongodb://127.0.0.1:27017")
      .then((client_object) => {
        let database = client_object.db("products");
        database
          .collection("products")
          .find({})
          .toArray()
          .then((documents) => {
            response.end(JSON.stringify(documents));
          });
      })
      .catch((error_object) => {
        console.log(error_object);
      });
  })
  .listen(7000, () => {
    console.log(`server started on port: 7000`);
  });
