let coins = require('./coins');
let product = require('./product');
let acceptCoin = require('./accept-coin');
let addUpCoins = require('./add-up-coins');
let selectProduct = require('./select-product')

import {
    forEach
} from 'lodash'



let exactChange = {
    brokenIntoChange: (productValue) => {
        let changeBroken = false;
        forEach(coins, (i) => {
            if (i.value % productValue.value === 0) {
                changeBroken = true;
            }
        })
        return changeBroken;
    }
}

module.exports = exactChange;