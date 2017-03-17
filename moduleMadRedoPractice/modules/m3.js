var randomNumber = require("./m1.js");
var usdConvert = require('./m2.js');

//first function returns converted value
function finalValue() {
  var randNum = randomNumber(100, 1000000);
  randNum = usdConvert(randNum);
  return randNum;
}


//second function return text
function addsText() {
  return "Account Balance: \n";
}


//export multiple functions, add require to m1
module.exports = {
  finalValue,
  addsText
};
