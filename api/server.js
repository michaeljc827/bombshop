var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var cors = require('cors')
const basicAuth = require('express-basic-auth')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(basicAuth({
//     users: { 'admin': 'supersecret' }
// }));

routes(app);

var server = app.listen(4000, function () {
    console.log("app running on port.", server.address().port);
});