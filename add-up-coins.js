import {
    map,
    reduce,
    filter,
    chain
} from 'lodash'

var acceptCoin = require('./accept-coin');
var rejectedCoins = {
    value: 0
}

var determineCoin = require('./accept-coin');
var sum = 0;
var addUpCoins = {

    extractCoinValue: (coin) => coin.value,

    /*Then you can split all your coins into two arrays, accepted and rejected. Then you can sum of the value of the rejected array for that value
    */
    determineCoinSum: (coins) => {
        if (coins.length > 0) {
            sum = chain(coins)
                .filter((i) => (acceptCoin.isAcceptableCoin(i.size, i.weight) ? i : false ))
                .map((item) => item.value)
                .reduce((sum, n) => sum + n, 0)
                .value()
            return sum;
        } else {
            return "INSERT COINS"
        }
    },



    returnRejectedCoins: function () {
        return rejectedCoins.value
    }

}



module.exports = addUpCoins