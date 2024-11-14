var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017").then((client_object) => {
  var database = client_object.db("products");
  var product = {
    id: 21,
    title: "Rajesh",
    price: 21,
    description: "My name is Rajesh",
    category: "Mens",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 4.5,
      count: 121,
    },
  };
  database
    .collection("products")
    .insertOne(product)
    .then(() => {
      console.log("Record Inserted");
    });
});
