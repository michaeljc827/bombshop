const myDB = require ('../database')
const db = new myDB

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send(' { "error" : "Please specify an end point." } ');
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

