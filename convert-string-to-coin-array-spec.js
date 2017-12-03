'use strict';
var expect = require('chai').expect;

var convertCoins = ""

var coins = require('./coins')



var coinsToBeInserted = [coins.quarter, coins.nickel, coins.dime, coins.dime, coins.quarter]
var coinsToBeInsertedWithBadCoins = [coins.quarter, coins.penny, coins.dime, coins.dime, coins.quarter, coins.nickel]
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

        var coinObject = [coins.dime, coins.dime, coins.dime]
        var rejectedCoinObject = [coins.penny, coins.penny]
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