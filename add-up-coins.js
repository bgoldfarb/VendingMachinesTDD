import { map, reduce, filter } from 'lodash'

/*When a valid coin is inserted the amount of the coin will be added to the current amount and the display will be updated. 
When there are no coins inserted, the machine displays INSERT COIN. Rejected coins are placed in the coin return.
*/

var determineCoin = require('./accept-coin');

var quarterValue = 0.25
var dimeValue = 0.10
var nickelValue = 0.05  


var addUpCoins = {
    determineCoinSum: function(coins){

        if(coins.length > 0){
        var quarterArray = map(coins, function(i){
            if(i === quarterValue){
                return i
            }
            else{
                return 0;
            }
        })
        var dimeArray = map(coins, function(i){
            if(i === dimeValue){
                return i
            }
            else{
                return 0;
            }
        })
        var nickelArray = map(coins, function(i){
            if(i === nickelValue){
                return i
            }
            else{
                return 0;
            }
        })

var sumArray = quarterArray.concat(dimeArray).concat(nickelArray)

var filteredSumArray = filter(sumArray, function(item){
    return item != 0;
})

var sum = reduce(filteredSumArray, function(sum, order){
    return sum + order;
}, 0)
        return sum;
    }
    else{
        return "INSERT COIN"
    }
}

}

//addUpCoins.determineCoinSum([0.25, .05, .10, 0.10, 0.25])
// var hi = addUpCoins.determineCoinSum([])
// console.log(hi)

module.exports = addUpCoins