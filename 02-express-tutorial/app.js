const express = require("express");
const { products } = require("./data");
const app = express();

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  return res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  return res.json({ products });
});

app.get("/api/v1/products/:id", (req, res) => {
  console.log(req.params);
  const newProducts = products.find((p) => p.id === Number(req.params.id));
  if (!newProducts) {
    return res.status(404).send({ message: "page not found" });
  }
  return res.json({ newProducts });
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;

  let sorted = [...products];
  
  console.log(sorted, req.query);
  
  if (search) {
    sorted = sorted.filter((p) => {
      return p.name.startsWith(search);
    });
  }
  
  if (limit) {
    sorted = sorted.slice(0, Number(limit));
  }
  if (price) {
   const  Nprice = Number(price)
    sorted = sorted.filter(p => p.price < Nprice)
  }

  res.send(sorted)


});

app.all("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(5000, () => {
  console.log("listen on 5000...");
});
