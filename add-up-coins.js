import { map, reduce, filter, curry} from 'lodash'

var acceptCoin = ""
acceptCoin = require('./accept-coin');


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
    weight: 2.5 ,
    size: 19.05
}

var rejectedCoins = {
    value: 0
}

var determineCoin = require('./accept-coin');

var addUpCoins = {

    extractCoinValue: function(coin){
        return coin.value
    },


    determineCoinSum: (function(coins){
        if(coins.length > 0){
        var acceptableCoinArray = filter(coins, function(i){
            if(acceptCoin.isAcceptableCoin(i.size, i.weight)){
                return i
            }
            else{
                rejectedCoins.value += i.value;
            }
        })
        var sum = 0;
        var valueArray = map(acceptableCoinArray, function(item){
            return item.value
        })
        sum = reduce(valueArray, (sum, n) => sum + n, 0)

        return sum;
    }
    else{
        return "INSERT COINS and maybe you'll get the foods!"
    }
}),

returnRejectedCoins: function(){
    return rejectedCoins.value
}

}



module.exports = addUpCoins