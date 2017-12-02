'use strict'
import {
    map,
    reduce,
    filter,
    curry
} from 'lodash'


var selectProduct = require('./select-product');
var acceptCoin = require('./accept-coin');
var addUpCoins = require('./add-up-coins');
var convertCoins = require('./convert-string-to-object-coin-array');
// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
var selection = "";
var enteredCoins = []
var rejectedCoins = []

var price = 0;
var sum = 0;
var selectedItemName = "";

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

var promptStart = function(){
    console.log("Welcome to the Vending Machine :) \n")
    console.log("1. Cola: ", product.cola.value)
    console.log("2. Chips: ", product.chips.value)
    console.log("3. Candy: ", product.candy.value)
    console.log("Please select an option from 1 to 3")
   
}





var checkIfPriceRemainingIsGreaterThanZero =  (priceRemaining) => priceRemaining > 0 ? true : false;
var subtractEnteredMoneyFromPrice = function (sum, price) {
    console.log("What you have put in: ", sum)
    console.log("What you want: ", price)
    return price - sum;

}