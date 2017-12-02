
var acceptCoin = ""
var addUpCoins = ""
var convertCoins = ""

var quarter = {
    value: 0.25,
    weight: 5.670,
    size: 24.26
}

var nickel = {
    value: 0.05,
    weight: 5,
    size: 21.21
}

var dime = {
    value: 0.10,
    weight: 2.268,
    size: 17.91
}

var penny = {
    value: 0.01,
    weight: 2.5,
    size: 19.05
}

var product = {
    cola: {
        value: 1.00
    },
    chips: {
        value: 0.50

    },
    candy: {
        value: 0.65
    }
}



acceptCoin = require('./accept-coin');
addUpCoins = require('./add-up-coins');
convertCoins = require('./convert-string-to-object-coin-array');



var makeChange = {


    returnProperAmountOwedToMachine: (selection) => {
        var coins = convertCoins.convertStringArrayToCoinObjectArray(selection)
        var sum = addUpCoins.determineCoinSum(coins)
        return parseFloat(sum).toFixed(2);
    },


    checkIfPriceRemainingIsGreaterThanZero: (priceRemaining) => priceRemaining > 0 ? true : false,


    subtractEnteredMoneyFromPrice: (sum, price) => {

        console.log("What you have put in: ", sum)
        console.log("What you want: ", price)
        return price - sum;

    }


}


var selection = 'quarter dime dime dime'
var array = selection.split(" ")
makeChange.returnProperAmountOwedToMachine(array)
module.exports = makeChange;