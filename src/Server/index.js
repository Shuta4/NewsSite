var express = require('express');

const port = 3000;
const server = express();

server.listen(port)
console.log("Server are running on port: " + port);

server.use('/api', require('./api.js'))