const myDB = require ('../database')
const db = new myDB

var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send(' { "error" : "Please specify an end point." } ');
  });
  
  app.get("/products", async function(req, res) {
    let products = await db.getProducts();
    let json = JSON.stringify(products);
    res.status(200).send(json);
  });

  app.post("/products", async function(req, res) {
    console.log("POST: /products", req.body)
    db.addProduct(req.body.product)
    res.status(200).send('');
  });

}

module.exports = appRouter;
