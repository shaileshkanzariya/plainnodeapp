//var restify = require('restify');
var express = require('express');

var server = new express();

server.get('/test', function (req, res, next) {
   res.send('I am here');
});
server.get('/', function (req, res, next) {
   res.send('I am at root');
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
