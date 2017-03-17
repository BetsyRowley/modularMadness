function randomNumber(min, max){
    var randNum = Math.floor(Math.random() * (1 + max - min) + min);
    // console.log(randNum);
    //randNum = usdConvert(randNum);
    // console.log(randNum);
    return randNum;
}

module.exports = randomNumber;
