'use strict';
var expect = require('chai').expect;

var convertCoins = ""

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



var coinsToBeInserted = [quarter, nickel, dime, dime, quarter]
var coinsToBeInsertedWithBadCoins = [quarter, penny, dime, dime, quarter, nickel]
var noCoinsToBeInserted = []


describe('All tests', () => {

    beforeEach(function () {
        convertCoins = require('./convert-string-to-object-coin-array');
    })


    describe('convert-string-to-coin-object should exist', function () {
        it('should exist', function () {
            expect(convertCoins).to.not.be.undefined;
        });
    });


    describe('test functionality of converString functions', function () {

        var coinObject = [dime, dime, dime]
        var rejectedCoinObject = [penny, penny]
        it('should return a coin object with two dimes', function () {
            var stringArray = 'dime dime dime'
            var array = stringArray.split(" ");
            var coins = (convertCoins.convertStringArrayToCoinObjectArray(array))
            expect(coins).to.be.eql(coinObject)
        })
        it('should return a coin object with two dimes and not count pennies', function () {
            var stringArray = 'dime penny penny dime dime'
            var array = stringArray.split(" ");
            var coins = (convertCoins.convertStringArrayToCoinObjectArray(array))
            expect(coins).to.be.eql(coinObject)
        })

        it('should return the rejected coin object with two pennies', function () {
            var stringArray = 'penny penny'
            var array = stringArray.split(" ");
            var coins = (convertCoins.convertStringArrayToRejectedCoinObjectArray(array))
            expect(coins).to.be.eql(rejectedCoinObject)
        })


        it('should return the rejected coin object with two pennies and not the dimes', function () {
            var stringArray = 'penny penny dime dime dime '
            var array = stringArray.split(" ");
            var coins = (convertCoins.convertStringArrayToRejectedCoinObjectArray(array))
            expect(coins).to.be.eql(rejectedCoinObject)
        })
    })


})