var acceptCoin = require('./accept-coin');
var addUpCoins = require('./add-up-coins');
var convertCoins = require('./convert-string-to-object-coin-array');
var selectProduct = require('./select-product')
var product = require('./product')
var flag = "";
var display = "";



var makeChange = {


    returnAmountPutIntoMachine: (coinsInserted) => {
        var coins = convertCoins.convertStringArrayToCoinObjectArray(coinsInserted)
        var sum = addUpCoins.determineCoinSum(coins)
        return parseFloat(sum).toFixed(2);
    },

    returnAmountOwedToMachine: (selection) => selection.value,


    checkIfPriceRemainingIsGreaterThanZero: (priceRemaining) => priceRemaining < 0 ? true : false,


    subtractEnteredMoneyFromPrice: (sum, price) => price - sum,


    returnTotalCoinsToCustomer: (coinsInserted) => {
        flag = "Customer wants coins returned"
        return coinsInserted


    },

    updateDisplay: () => {

        if (flag === 'Customer wants coins returned') {
            display = "INSERT COIN"
        }

        return display;

    }


}

module.exports = makeChange;