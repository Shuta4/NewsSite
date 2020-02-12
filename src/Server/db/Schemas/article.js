const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    id: String,
    header: String,
    text: String,
    author: String,
    sourceLink: String,
    sourceName: String,
    creationDateText: String, 
    creationDate: Date
});

const Article = mongoose.model("article", ArticleSchema);
module.exports = Article;