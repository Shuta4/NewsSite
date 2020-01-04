const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = 3000;
const server = express();
mongoose.connect("mongodb://localhost/aticles-db", { useNewUrlParser: true, useUnifiedTopology: true });

server.use(bodyParser.json());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
server.use('/api', require('./api.js'));

server.listen(port)
console.log("Server are running on port: " + port);
