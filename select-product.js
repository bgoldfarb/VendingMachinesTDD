
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
        product.quantity += -1
        return product
        
    },

    displayPrice:  (selectedProduct) => {
        var string = "Amount owed: " + selectedProduct.value;
        return string
    },

    updateDisplay: () => {
        if(flag === 'Customer wants a product'){
            display = "THANK YOU"
        }
        else if(flag === 'Product Not Available'){
            display = "SOLD OUT"
        }
        return display;
    },

    checkIfProductIsStillAvailable: (quantity) => {
        if(quantity < 0){
            flag = "Product Not Available"
        }
        else{
            display = "THANK YOU"
        }
    }


}



var selectedProduct = product.candy;


module.exports = selectProduct;