var http = require("http");

var randomNumber = require("./modules/m1.js");
var usdConvert = require('./modules/m2.js');
var m3 = require('./modules/m3.js');


http.createServer(function(request, response) {

  var someNumber = 0;
  someNumber = m3.finalValue();

  var newText = "";
  newText = m3.addsText();

  response.writeHead(200);
  response.write(newText + "$" + someNumber + "\n");
  response.end();
}).listen(3000);

console.log("Server listening");
