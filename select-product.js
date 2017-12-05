let runningTotal = 0;
let display = "";
let flag = "";
let selectProduct = require('./select-product');

let coins = require('./coins')
let product = require('./product')



selectProduct = {

    returnProduct: (product) => {
        flag = "Customer wants a product"
        product.quantity += -1
        return product

    },

    displayPrice: (selectedProduct) => {
        let string = "Amount owed: " + selectedProduct.value;
        return string
    },

    updateDisplay: () => {
        if (flag === 'Customer wants a product') {
            display = "THANK YOU"
        } else if (flag === 'Product Not Available') {
            display = "SOLD OUT"
        }
        return display;
    },

    checkIfProductIsStillAvailable: (quantity) => {
        if (quantity < 0) {
            flag = "Product Not Available"
        } else {
            display = "THANK YOU"
        }
    }


}



let selectedProduct = product.candy;


module.exports = selectProduct;