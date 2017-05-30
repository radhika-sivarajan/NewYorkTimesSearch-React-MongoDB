var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NYTNewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    published_date: {
        type: String
    },
    snippet: {
        type: String
    },
    link: {
        type: String
    }
});

var NYTNews = mongoose.model("NYTNews", NYTNewsSchema);

module.exports = NYTNews;