
function returnNumber(result) {
  return result;
}

function returnText(something) {
  return "Account Balance: \n" + "$" + something +"\n";
}

module.exports = {
  returnNumber,
  returnText
};
// module.exports = returnNumber;
// module.exports = returnText;
