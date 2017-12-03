/*As a vendor
I want a vending machine that accepts coins
So that I can collect money from the customer

The vending machine will accept valid coins (nickels, dimes, and quarters) and reject invalid ones (pennies). 
When a valid coin is inserted the amount of the coin will be added to the current amount and the display will be updated. 
When there are no coins inserted, the machine displays INSERT COIN. Rejected coins are placed in the coin return.

NOTE: The temptation here will be to create Coin objects that know their value. However, this is not how a real vending machine works. Instead, it identifies coins by their weight and size and then assigns a value to what was inserted. You will need to do something similar. This can be simulated using strings, constants, enums, symbols, or something of that nature.
*/

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



var rejectedCoins = []



var acceptCoin = { 
    
    isNickel: (nickelSize, nickelWeight) => (nickelSize === nickel.size && nickelWeight === nickel.weight ? true : false)
    ,
    isDime:  (dimeSize, dimeWeight) => (dimeSize === dime.size && dimeWeight === dime.weight ? true : false)
    ,
    isQuarter:  (quarterSize, quarterWeight) => (quarterSize === quarter.size && quarterWeight === quarterWeight ? true : false)
    ,
    isAcceptableCoin: (coinSize, coinWeight) => (acceptCoin.isNickel(coinSize, coinWeight) || acceptCoin.isDime(coinSize, coinWeight) || acceptCoin.isQuarter(coinSize, coinWeight))
};


module.exports = acceptCoin;