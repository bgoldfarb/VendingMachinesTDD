'use strict'
var expect = require('chai').expect;
var selectProduct = "";


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

beforeEach(function(){
    selectProduct = require('./select-product');
})

describe('select-product-exists', function() {
    it('should exist', function() {
        expect(selectProduct).to.not.be.undefined;
    });
});

describe('Select Product', function(){
    it('should select the right product', function(){
        var selection = product.candy
        expect(selectProduct.returnProduct(selection)).to.equal(product.candy)
    })

    it('should display proper amount owed', function(){
        var selectedProduct = product.candy
        var expectedString = "Amount owed: " + 0.65;
        var resultString = selectProduct.displayPrice(selectedProduct)
        expect(resultString).to.eql(expectedString)
        
        
    })
})