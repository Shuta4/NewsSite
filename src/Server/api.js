const fs = require('fs');
const express = require('express');
const router = express.Router();
const Article = require('./db/Schemas/article');

function getDataJSON(path) {
    var dataJSON = fs.readFile(path);
    return JSON.parse(dataJSON);
}

router.get('/start', (req, res, next) => {
    // siteImage, siteName, route, contacts and navigation Arrs
    res.send(getDataJSON("./serverData.json"));
});

router.put('/start', (req, res, next) => {
    // Update site information 
    //TODO
});

router.get('/articles', (req, res, next) => {
    // All articles
    Article.find({}).then(articles => {
        res.send(articles)
    });
    next();
});

router.get('/articles/id/:id', (req, res, next)=> {
    // Article by id
    Article.findOne({id: req.params.id}).then(article => res.send(article));
    next();
});

router.get('/articles/header/:header', (req, res, next) => {
    // Article by its header
    Article.find({header: req.params.header}).then(article => res.send(article));
    next();
});

router.delete('/articles/:id', (req, res, next) => {
    // delete article with "id" == "req.params.id"
    Article.deleteOne({id: req.params.id});
    next();
});

router.delete('/articles/objid/:id', (req, res, next) => {
    // delete article with "_id" == "req.params.id"
    Article.findByIdAndDelete(req.params.id).then(() => res.send("Deleted successfully"));
    next();
});

router.post('/articles', (req, res, next) => {
    // Add article
    Article.create(req.body).then(article => res.send(article));
    next();
});

router.put('/articles/:id', (req, res, next) => {
    // Update article with "id" == "req.params.id"
    Article.findOneAndUpdate({id: req.params.id}, req.body).then(() => Article.findOne({id: req.params.id}))
        .then(article => res.send(article));
    next();
});

module.exports = router;
