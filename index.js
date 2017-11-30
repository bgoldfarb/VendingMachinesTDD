'use strict'
import { map, reduce, filter, curry} from 'lodash'


var selectProduct = require('./select-product');
var acceptCoin = require('./accept-coin');
var addUpCoins = require('./add-up-coins');
var selection = "";
var enteredCoins = []
var prompt = require('prompt');





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

var product = {
    cola:  {
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



prompt.start();
console.log("Welcome to the Vending Machine :) \n")
console.log("1. Cola: ", product.cola.value)
console.log("2. Chips: ", product.chips.value)
console.log("3. Candy: ", product.candy.value)


console.log("Please Select which Option you'd like")
  prompt.get(['option'], function (err, result) {
    selection = result;
    console.log('  Option: ' + result.option);
    console.log(selection.option)
    if(selection.option === '1'){
        console.log("One Cola coming righ up...")
        selection.option = product.cola
    }
    else if(selection.option === '2'){
        console.log("One Chips coming right up...")
        selection.option = product.chips
    }
    else if(selection.option === '3'){
        console.log("One Candy coming right up...")        
        selection.option = product.candy   
    }

    var string = selectProduct.displayPrice(selection.option)
    console.log(string)

    console.log("Please enter your coins all at once followed by a space, only quarter, dimes, and nickels accpeted at this time")

    prompt.get(['option'], function (err, result) {
        console.log('  Option: ' + result.option);
        enteredCoins = result.option
        var array = enteredCoins.split(" ");        
        console.log(array)
    })

  });