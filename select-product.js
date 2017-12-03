
var selectProduct = "";
var runningTotal = 0;
var display = "";
var flag = "";
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
    weight: 2.5,
    size: 19.05
}

var product = require('./product')



var selectProduct = {

    returnProduct: (product) => {
        flag = "Customer wants a product"
        return product
        
    },

    displayPrice: function (selectedProduct) {
        var string = "Amount owed: " + selectedProduct.value;
        return string
    },

    updateDisplay: () => {
        if(flag === 'Customer wants a product'){
            display = "THANK YOU"
        }
        
        return display;
    }


}



var selectedProduct = product.candy;


module.exports = selectProduct;