const mysql = require('mysql');

const config = require('./config/databaseconfig');

module.exports = class MyDatabase {

    constructor(){
        this.con = mysql.createConnection( config.settings );

        this.con.connect(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connected!");
            }
        });
    }

    async getProduct(productId){
        return new Promise( (resolve) => {
            this.con.query('SELECT * FROM products WHERE id = ?',[productId], function(error,results,fields){
                if (error){
                    console.log(error);
                } else {
                    let product = results[0];
                    resolve({
                        'id': product.id,
                        'name': product.name,
                        'price': product.price
                    });
                }
            });
        });
    }

    async getProducts(){
        return new Promise( (resolve) => {
            this.con.query('SELECT * FROM products ORDER BY name ASC', function(error,results,fields){
                if (error){
                    console.log(error)
                } else {
                    let arr = [];
                    for (let i in results){
                        let row = results[i];
                        let tmp = {
                            "id": row.id,
                            "name": row.name,
                            "price": row.price
                        }
                        arr.push(tmp)
                    }
                    resolve(arr);
                }
            });
        });
    }

    async addProduct(productObject){
        return new Promise( (resolve) => {
            this.con.query( 'INSERT INTO products (name,price) VALUES ( ? , ? )', [productObject.name,productObject.price], function(error, results, fields) {
                resolve(results.insertId);
            });
        });
    }

    async deleteProduct(productId){
        return new Promise( (resolve) => {
            this.con.query('DELETE FROM products WHERE id = ?',[productId], function(error,results,fields){
                //TODO: add error catching
                resolve('OK');
            });
        });
    }

    async updateProduct(productId,product){
        return new Promise( (resolve) => {
            let name = product.name;
            let price = product.price;

            this.con.query('UPDATE products SET name = ?, price = ? WHERE id = ?',[ name,price,productId ], function(error,results,fields){
                resolve({
                    'id': productId,
                    'name': product.name,
                    'price': product.price
                });
            });
        });
    }
    
}