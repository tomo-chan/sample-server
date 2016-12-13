var app = require('./app');

var port = process.env.PORT || 3000;

var server = require('http').createServer(app);
server.listen(port, function() {
  console.log('Server listening at port %d', port);
});