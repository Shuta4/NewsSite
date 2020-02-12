const fs = require('fs');
const express = require('express');
const router = express.Router();
const Article = require('./db/Schemas/article');

function getDataJSON(path) {
    var dataJSON = fs.readFile(path);
    return JSON.parse(dataJSON);
}

router.get('/start', (req, res) => {
    // siteImage, siteName, route, contacts and navigation Arrs
    res.send(getDataJSON("./serverData.json"));
});

router.put('/start', (req, res) => {
    // Update site information 
    //TODO
});

router.get('/articles', (req, res) => {
    // All articles
    Article.find({}).then(articles => {
        res.send(articles)
    });
});

router.get('/articles/id/:id', (req, res)=> {
    // Article by id
    Article.findOne({id: req.params.id}).then(article => res.send(article));
});

router.get('/articles/header/:header', (req, res) => {
    // Article by its header
    Article.find({header: req.params.header}).then(article => res.send(article));
});

router.delete('/articles/:id', (req, res) => {
    // delete article with "id" == "req.params.id"
    Article.deleteOne({id: req.params.id});
});

router.delete('/articles/objid/:id', (req, res) => {
    // delete article with "_id" == "req.params.id"
    Article.findByIdAndDelete(req.params.id).then(() => res.send("Deleted successfully"));
});

router.post('/articles', (req, res) => {
    // Add article
    Article.create(req.body).then(article => res.send(article));
});

router.put('/articles/:id', (req, res) => {
    // Update article with "id" == "req.params.id"
    Article.findOneAndUpdate({id: req.params.id}, req.body).then(() => Article.findOne({id: req.params.id}))
        .then(article => res.send(article));
});

module.exports = router;
