var coins = require('./coins')

var product = require('./product')

var rejectedCoins = []


var convertCoins = {

    convertStringArrayToCoinObjectArray: function (stringArray) {
        var coinArray = []
        for (var i = 0; i < stringArray.length; i++) {
            if (stringArray[i] === 'dime') {
                coinArray.push(coins.dime);
            } else if (stringArray[i] === 'quarter') {
                coinArray.push(coins.quarter);
            } else if (stringArray[i] === 'nickel') {
                coinArray.push(coins.nickel);
            } else {
                rejectedCoins.push(stringArray[i])
            }
        }
        return coinArray
    },

    convertStringArrayToRejectedCoinObjectArray: function (stringArray) {
        var coinArray = []
        for (var i = 0; i < stringArray.length; i++) {
            if (stringArray[i] === 'penny') {
                coinArray.push(coins.penny);
            } else if (stringArray[i] === 'dollar') {
                coinArray.push(coins.dollar);
            } else {
                rejectedCoins.push(stringArray[i])
            }
        }
        return coinArray
    }
}

module.exports = convertCoins