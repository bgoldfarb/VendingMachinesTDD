'use strict';
import chai, {
    expect
} from 'chai'
import {
    spy,
    match
} from 'sinon'
import sinonChai from 'sinon-chai'
let coins = require('./coins')
let product = require('./product')
let exactChange = require('./exact-change')
let selectProduct = require('./select-product')
let sinon = require('sinon')
chai.use(sinonChai)


let coinsToBeInserted = [coins.quarter, coins.nickel, coins.dime, coins.dime, coins.quarter]
let coinsToBeInsertedWithBadCoins = [coins.quarter, coins.penny, coins.dime, coins.dime, coins.quarter, coins.nickel]
let noCoinsToBeInserted = []

let productSelectedMock = {}

//When product is selected, need to know if machine can make exact change 

describe('Test: ', () => {


    describe('exact-change module should exist', function () {
        it('should exist', function () {
            expect(exactChange).to.not.be.undefined;
        })
    })


    describe('Test functionality of exact-change module', function () {

        beforeEach(function() {
            


          });

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

        it('should only call the returnProduct function once', function () {
            var spy = sinon.spy(selectProduct, 'returnProduct')
            var productSelected = selectProduct.returnProduct(productSelectedMock)
            spy.restore()            
            sinon.assert.calledOnce(spy);
        })

        it('should only call the brokenIntoChange function once', function () {
            let spy = sinon.spy(exactChange, 'brokenIntoChange')
            let canBeBroken = exactChange.brokenIntoChange(productSelectedMock)
            spy.restore()
            sinon.assert.calledOnce(spy);
            
        })

        it('should check the exactChange function is called with the right args', function () {
            let spy = sinon.spy(exactChange, 'brokenIntoChange')
            let canBeBroken = exactChange.brokenIntoChange(productSelectedMock)
            spy.restore()            
            sinon.assert.calledWith(spy, productSelectedMock);
        })




    })



})