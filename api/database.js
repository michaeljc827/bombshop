const mysql = require('mysql');

module.exports = class MyDatabase {

    constructor(){
        this.con = mysql.createConnection({
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
            user: "root",
            password: "root",
            database: 'BombShop',
        });

        this.con.connect(function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Connected!");
            }
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
    
}