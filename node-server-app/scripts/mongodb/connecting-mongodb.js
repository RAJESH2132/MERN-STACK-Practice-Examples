var mongoClient = require("mongodb").MongoClient;

mongoClient
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log(`Connected with MongoDB server`);
  })
  .catch((error_object) => {
    console.log(error_object);
  });
