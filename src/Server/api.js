const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    // All articles
})

router.get('/articles/name/:name', (req, res) => {
    // Article by its name
})

router.get('/articles/id/:id', (req, res)=> {
    // Article by id
})

router.get('/start', (req, res) => {
    // siteImage, siteName, route and navigation Arrs 
})

router.delete('/articles/:id', (req, res) => {
    // delete article with "id" == "req.params.id"
})

router.post('/articles', (req, res) => {
    // Add article
})

router.put('/articles/:id', (req, res) => {
    // Update article with "id" == "req.params.id"
})

router.put('/start', (req, res) => {
    // Update site information
})

module.exports = router;