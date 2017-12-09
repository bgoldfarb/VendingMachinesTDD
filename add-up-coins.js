import {
    map,
    reduce,
    filter,
    chain,
    partition,
} from 'lodash'

let acceptCoin = require('./accept-coin');
let coins = require('./coins')
let rejectedCoins = {

}

let determineCoin = require('./accept-coin');
let sum = 0;

let addUpCoins = {

    extractCoinValue: (coin) => coin.value,
    determineCoinSum: (coins) => {

        let splitCoins = partition(coins, (i) => acceptCoin.isAcceptableCoin(i.size, i.weight))
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


    returnRejectedCoins: () => rejectedCoins



}

// let coinsToBeInsertedWithBadCoins = [coins.quarter, coins.penny, coins.dime, coins.dime, coins.quarter, coins.nickel]
// addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
// let badCoins = addUpCoins.returnRejectedCoins()
// console.log(badCoins)
// console.log(coins.penny)



module.exports = addUpCoins