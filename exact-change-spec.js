'use strict';
var expect = require('chai').expect;
let coins = require('./coins')
let product = require('./product')
let exactChange = require('./exact-change')
let selectProduct = require('./select-product')



let coinsToBeInserted = [coins.quarter, coins.nickel, coins.dime, coins.dime, coins.quarter]
let coinsToBeInsertedWithBadCoins = [coins.quarter, coins.penny, coins.dime, coins.dime, coins.quarter, coins.nickel]
let noCoinsToBeInserted = []


//When product is selected, need to know if machine can make exact change 

describe('Test: ', () => {
    
      
        describe('exact-change module should exist', function () {
            it('should exist', function () {
                expect(exactChange).to.not.be.undefined;
            })
        })


        describe('Test functionality of exact-change module', function () {

            it('should check if product selected can be broken into change', function () {
               var productSelected = selectProduct.returnProduct(product.cola)
               var canBeBroken = exactChange.brokenIntoChange(productSelected)
               var exepected = true;
               expect(canBeBroken).to.equal(exepected)
            })

            it('should check if product selected cannot be broken into change', function () {
                var productSelected = selectProduct.returnProduct(product.candy)
                var canBeBroken = exactChange.brokenIntoChange(productSelected)
                var exepected = false;
                expect(canBeBroken).to.equal(exepected)
             })
        })



})    