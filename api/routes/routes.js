const myDB = require ('../database')
const db = new myDB

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send(' { "error" : "Please specify an end point." } ');
  });

  app.get("/product/:productId", async function(req,res){
    console.log("GET: /product");
    let productId = req.params['productId'];
    let product = await db.getProduct(productId);
    let json = JSON.stringify(product)
    console.log(json);
    res.status(200).send(json);
  });

  app.put("/product/:productId", async function(req, res) {
    console.log("UPDATE: /product");
    let productId = req.params['productId'];
    let product = req.body.product;
    let updatedProduct = await db.updateProduct(productId,product);
    let json = JSON.stringify(updatedProduct)
    console.log(json);
    res.status(200).send(json);
  });
  
  app.get("/products", async function(req, res) {
    console.log("GET: /products");
    let products = await db.getProducts();
    let json = JSON.stringify(products);
    res.status(200).send(json);
  });

  app.post("/products", async function(req, res) {
    let id = await db.addProduct(req.body.product)
    console.log(id)
    res.status(200).send(JSON.stringify(id));
  });

  app.delete("/products", async function(req, res){
    console.log("DELETE: /products",req.body)
    db.deleteProduct(req.body.productId);
    res.status(200).send('');
  });

}

module.exports = appRouter;

