
var selectProduct = "";
var runningTotal = 0;
var display = "";
var flag = "";
selectProduct = require('./select-product');

var coins = require('./coins')
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