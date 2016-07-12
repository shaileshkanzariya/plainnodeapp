var restify = require('restify');

var server = restify.createServer();

server.get('/test', function (req, res, next) {
   res.send('I am here');
});

server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
});
