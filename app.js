var http = require('http');
var randomNumber = require('./module1.js');


http.createServer(function(request, response) {
  var someNumber = 0;
  someNumber = randomNumber(100, 1000000);
  response.writeHead(200);
  response.write(someNumber);
  response.end();
}).listen(3000);

console.log("listening");
