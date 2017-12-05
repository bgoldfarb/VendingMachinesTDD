let acceptCoin = require('./accept-coin');
let addUpCoins = require('./add-up-coins');
let convertCoins = require('./convert-string-to-object-coin-array');
let selectProduct = require('./select-product')
let product = require('./product')
let flag = "";
let display = "";



let makeChange = {


    returnAmountPutIntoMachine: (coinsInserted) => {
        let coins = convertCoins.convertStringArrayToCoinObjectArray(coinsInserted)
        let sum = addUpCoins.determineCoinSum(coins)
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