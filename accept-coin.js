var coins = require('./coins')


var acceptCoin = {

    isNickel: (nickelSize, nickelWeight) => (nickelSize === coins.nickel.size && nickelWeight === coins.nickel.weight? true : false),
    isDime: (dimeSize, dimeWeight) => (dimeSize === coins.dime.size && dimeWeight === coins.dime.weight ? true : false),
    isQuarter: (quarterSize, quarterWeight) => (quarterSize === coins.quarter.size && quarterWeight === coins.quarter.weight ? true : false),
    isAcceptableCoin: (coinSize, coinWeight) => (acceptCoin.isNickel(coinSize, coinWeight) || acceptCoin.isDime(coinSize, coinWeight) || acceptCoin.isQuarter(coinSize, coinWeight))
};


module.exports = acceptCoin;      