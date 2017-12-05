'use strict'
var expect = require('chai').expect;
var selectProduct = require('./select-product');;
var product = require('./product')
var coins = require('./coins')
var sinon = require('sinon')


describe('select-product-exists', () => {
    it('should exist', function() {
        expect(selectProduct).to.not.be.undefined;
    });
});

describe('Select Product', () => {
    it('should select the right product', function(){
        var display = "THANK YOU"
        var selection = product.candy
        expect(selectProduct.returnProduct(selection)).to.equal(product.candy)
        expect(display).to.equal(selectProduct.updateDisplay())
    })

    it('should display proper amount owed', () => {
        var selectedProduct = product.candy
        var expectedString = "Amount owed: " + 0.65;
        var resultString = selectProduct.displayPrice(selectedProduct)
        expect(resultString).to.equal(expectedString)
        
        
    })

    //SOLD OUT
    it('should tell me the product I have selected is out of stock', () => {
        var selectedProduct = product.candy
        var returnedProduct = selectProduct.returnProduct(selectedProduct)
        var returnedProduct2 = selectProduct.returnProduct(selectedProduct)
        var expectedString = "SOLD OUT"
        selectProduct.checkIfProductIsStillAvailable(returnedProduct2.quantity)
        expect(expectedString).to.equal(selectProduct.updateDisplay())
    })
})