var http = require('http');
var usdConvert = require('./module2.js');

var m3Functions = require('./module3.js');
// var returnText = require('./module3.js');
// var returnNumber = require('./module3.js');


function randomNumber(min, max){


    var aNumber = Math.floor(Math.random() * (1 + max - min) + min);

    aNumber = usdConvert(aNumber);

    value = m3Functions.returnNumber(aNumber);

    return m3Functions.returnText(value);
}

module.exports = randomNumber;
