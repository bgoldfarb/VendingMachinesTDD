import {
    map,
    reduce,
    filter
} from 'lodash'

var acceptCoin = require('./accept-coin');

var rejectedCoins = {
    value: 0
}

var determineCoin = require('./accept-coin');

var addUpCoins = {

    extractCoinValue:  (coin) =>  coin.value ,

    determineCoinSum:  (coins) => {
        if (coins.length > 0) {
            var acceptableCoinArray = filter(coins, function (i) {
                if (acceptCoin.isAcceptableCoin(i.size, i.weight)) {
                    return i
                } else {
                    rejectedCoins.value += i.value;
                }
            })
            var sum = 0;
            var valueArray = map(acceptableCoinArray, function (item) {
                return item.value
            })
            sum = reduce(valueArray, (sum, n) => sum + n, 0)

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