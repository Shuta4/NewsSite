const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = 3000;
const server = express();
mongoose.connect("mongodb://localhost/aticles-db", { useNewUrlParser: true, useUnifiedTopology: true });

server.use(bodyParser.json());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    next()
  });
server.use('/api', require('./api.js'));

server.listen(port)
console.log("Server are running on port: " + port);
