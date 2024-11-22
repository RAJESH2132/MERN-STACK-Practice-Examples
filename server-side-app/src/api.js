const express = require("express");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;

const conString = "mongodb://127.0.0.1:27017";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//base url
app.get("/", (req, res) => {
  res.send("Home Page");
});

//fetching products using get
app.get("/products", (req, res) => {
  mongoClient.connect(conString).then((client_obj) => {
    var database = client_obj.db("products");
    database
      .collection("products")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

//fetching specific product using id
app.get("/product/:id", (req, res) => {
  mongoClient.connect(conString).then((client_obj) => {
    var database = client_obj.db("products");
    database
      .collection("products")
      .findOne({ id: parseInt(req.params.id) })
      .then((document) => {
        res.send(document);
        res.end();
      });
  });
});

//adding new product
app.post("/register-user", (req, res) => {
  mongoClient.connect(conString).then((client_obj) => {
    var database = client_obj.db("products");
    var product = {
      id: parseInt(req.body.id),
      title: req.body.title,
      price: parseInt(req.body.price),
      description: req.body.description,
      category: req.body.category,
    };
    database
      .collection("products")
      .insertOne(product)
      .then(() => {
        console.log("Product added");
        res.redirect("/products");
      });
  });
});

//changing data in given product
app.put("/alter-product/:id", (req, res) => {
  mongoClient.connect(conString).then((client_obj) => {
    var database = client_obj.db("products");

    database
      .collection("products")
      .updateOne(
        { id: parseInt(req.params.id) },
        {
          $set: {
            title: req.body.title,
            price: parseInt(req.body.price),
            description: req.body.description,
            category: req.body.category,
          },
        }
      )
      .then(() => {
        console.log("Product Updated");
        res.redirect("/products");
      });
  });
});

//Deleting a product
app.use("/delete-product/:id", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("products");

    database
      .collection("products")
      .deleteOne({ id: parseInt(req.params.id) })
      .then(() => {
        console.log("User Deleted");
        res.redirect("/products");
      });
  });
});

app.listen(5000, () => {
  console.log(`Server started http://127.0.0.1:5000`);
});
