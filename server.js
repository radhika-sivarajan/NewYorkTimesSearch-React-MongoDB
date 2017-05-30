var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");

var NYTNews = require("./models/news.js");

var PORT = process.env.PORT || 3000;
var app = express();
process.env.NODE_ENV = 'development';

app.use(express.static("public"));

mongoose.Promise = Promise;
if (process.env.NODE_ENV === 'production') {
    console.log('node env is', process.env.NODE_ENV);
    mongoose.connect('mongodb://radhika:radhika@ds149481.mlab.com:49481/heroku_309mccdx');
} else {
    console.log('node env is', process.env.NODE_ENV);
    mongoose.connect('mongodb://localhost/nyt-search');
}
var db = mongoose.connection;
db.on("error", function(error) { console.log("Mongoose Error: ", error); });
db.once("open", function() { console.log("Mongoose connection successful."); });