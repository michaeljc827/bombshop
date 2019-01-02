const routes = require('next-routes')

module.exports = routes()                 
    .add('product','/product/:id','shop/product')
    .add('adminProduct','/admin/product/:id','admin/product')