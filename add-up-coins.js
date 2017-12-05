import {
    map,
    reduce,
    filter,
    chain,
    partition,
} from 'lodash'

var acceptCoin = require('./accept-coin');
var coins = require('./coins')
var rejectedCoins = {

}

var determineCoin = require('./accept-coin');
var sum = 0;
var addUpCoins = {

    extractCoinValue: (coin) => coin.value,
    determineCoinSum: (coins) => {

        var splitCoins = partition(coins, (i) => acceptCoin.isAcceptableCoin(i.size, i.weight))
        rejectedCoins = ((splitCoins[1][0]))

        if (coins.length > 0) {
            sum = chain(coins)
                .filter((i) => (acceptCoin.isAcceptableCoin(i.size, i.weight) ? i : false))
                .map((item) => item.value)
                .reduce((sum, n) => sum + n, 0)
                .value()
            return sum;
        } else {
            return "INSERT COINS"
        }
    },



    returnRejectedCoins: function () {
        return rejectedCoins
    }

}

// var coinsToBeInsertedWithBadCoins = [coins.quarter, coins.penny, coins.dime, coins.dime, coins.quarter, coins.nickel]
// addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
// var badCoins = addUpCoins.returnRejectedCoins()
// console.log(badCoins)
// console.log(coins.penny)



module.exports = addUpCoins