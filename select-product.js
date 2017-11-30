import { map, reduce, filter, curry} from 'lodash'

var selectProduct = "";
var runningTotal = 0;
selectProduct = require('./select-product');

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
        value: 1.00
    },
    chips: {
        value: 0.50

    },
    candy: {
        value: 0.65
    }
}


var selectProduct = {

    returnProduct: function(product){
        return product
    },

    displayPrice: function(selectedProduct){
        var string = "Amount owed: " + selectedProduct.value;
        return string
        
    }


}



var selectedProduct = product.candy;

// var string = selectProduct.displayPrice(selectedProduct)
// console.log(string)


module.exports = selectProduct;


