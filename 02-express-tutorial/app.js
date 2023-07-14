const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1> Home page <a href="/api/products">Products</a></h1>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((products) => {
    return products.id === Number(productID);
  });
  if (!singleProduct) {
    res.status(404).send("product does not exist");
  } else {
    res.json(singleProduct);
  }
});

app.get("/api/products/:productID/review/:reviewID", (req, res) => {
  console.log(res.params);
  res.send("Hello world");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = products.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = products.slice(0, Number(limit));
  }
  if (sortedProducts < 1) {
    // res.status(200).send("no products match your search");
    return res.status(200).send({success:true,data:[]});
  }
  
  res.status(200).json(sortedProducts);
  res.send("Hello world");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000");
});
