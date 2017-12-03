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


var acceptCoin = {

    isNickel: (nickelSize, nickelWeight) => (nickelSize === nickel.size && nickelWeight === nickel.weight ? true : false),
    isDime: (dimeSize, dimeWeight) => (dimeSize === dime.size && dimeWeight === dime.weight ? true : false),
    isQuarter: (quarterSize, quarterWeight) => (quarterSize === quarter.size && quarterWeight === quarterWeight ? true : false),
    isAcceptableCoin: (coinSize, coinWeight) => (acceptCoin.isNickel(coinSize, coinWeight) || acceptCoin.isDime(coinSize, coinWeight) || acceptCoin.isQuarter(coinSize, coinWeight))
};


module.exports = acceptCoin;