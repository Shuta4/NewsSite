var express = require('express');

const port = 3000;
const server = express();

server.get('/', (req, res) => {
    res.send("Its home page.")
});

server.get("/about", (req, res) => {
    res.send('Its about page.')
});

server.get('/articles/:id', (req, res) => {
    res.send('Its article with id ' + req.params.id + ".")
});


//Последняя проверка для выведения ошибки 404 page not found
server.get('/*', (req, res) => {
    res.send("Error 404: page " + req.url + " not found.")
});

server.listen(port)
console.log("Server are running on port: " + port);