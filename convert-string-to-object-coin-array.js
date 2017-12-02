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

var dollar = {
    value: 1.00
}

var product = {
    cola: {
        value: 1.00,
        name: 'Cola'
    },
    chips: {
        value: 0.50,
        name: 'Chips'

    },
    candy: {
        value: 0.65,
        name: 'Candy'
    }
}

var rejectedCoins = []


var convertCoins = {

    convertStringArrayToCoinObjectArray: function (stringArray) {
        var coinArray = []
        for (var i = 0; i < stringArray.length; i++) {
            if (stringArray[i] === 'dime') {
                coinArray.push(dime);
            } else if (stringArray[i] === 'quarter') {
                coinArray.push(quarter);
            } else if (stringArray[i] === 'nickel') {
                coinArray.push(nickel);
            } else {
                rejectedCoins.push(stringArray[i])
            }
        }
        return coinArray
    },

    convertStringArrayToRejectedCoinObjectArray: function (stringArray) {
        var coinArray = []
        for (var i = 0; i < stringArray.length; i++) {
            if (stringArray[i] === 'penny') {
                coinArray.push(penny);
            } else if (stringArray[i] === 'dollar') {
                coinArray.push(dollar);
            } else {
                rejectedCoins.push(stringArray[i])
            }
        }
        return coinArray
    }
}

module.exports = convertCoins