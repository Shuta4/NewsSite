var express = require('express');

const port = 3000;
const server = express();

server.get('/', (req, res) => {
    res.send("Its home page")
});

server.get("/about", (req, res) => {
    res.send('Its about page')
});

server.get('/*', (req, res) => {
    res.send("Error 404")
});

server.listen(port)
console.log("Server are running on port: " + port);