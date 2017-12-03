
var acceptCoin = ""
var addUpCoins = ""
var convertCoins = ""
var selectProduct = "";
var display = "";
var flag = "";

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
selectProduct = require('./select-product')



var makeChange = {


    returnAmountPutIntoMachine: (coinsInserted) => {
        var coins = convertCoins.convertStringArrayToCoinObjectArray(coinsInserted)
        var sum = addUpCoins.determineCoinSum(coins)
        return parseFloat(sum).toFixed(2);
    },

    returnAmountOwedToMachine: (selection) => selection.value,


    checkIfPriceRemainingIsGreaterThanZero: (priceRemaining) => priceRemaining < 0 ? true : false,


    subtractEnteredMoneyFromPrice: (sum, price) =>  price - sum,


    returnTotalCoinsToCustomer:(coinsInserted) =>  {
        flag = "Customer wants coins returned"
        return coinsInserted


    },

    updateDisplay: () => {

        if(flag === 'Customer wants coins returned'){
            display = "INSERT COIN"
        }

        return display;
        
    }


}


// var selection = 'quarter dime dime dime'
// var array = selection.split(" ")
// makeChange.returnAmountPutIntoMachine(array)
module.exports = makeChange; 