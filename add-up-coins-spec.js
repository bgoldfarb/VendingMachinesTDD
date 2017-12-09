'use strict';
var expect = require('chai').expect;

var addUpCoins = require('./add-up-coins');
var coins = require('./coins')
var sinon = require('sinon');

var coinsToBeInserted = [coins.quarter, coins.nickel, coins.dime, coins.dime, coins.quarter]
var coinsToBeInsertedWithBadCoins = [coins.quarter, coins.penny, coins.dime, coins.dime, coins.quarter, coins.nickel]
var noCoinsToBeInserted = []
var mock = ""


describe('All tests', () => {
    describe('add-up-coin-exists', function () {
        it('should exist', function () {
            expect(addUpCoins).to.not.be.undefined;
        });
    });



    describe('Coin Sum Functionality', function () {

        beforeEach(() => {
            mock = sinon.mock(coins)
            mock.restore()

        })

        afterEach(() => {
            mock.restore()
        })


        it('should extract all values from coin objects', function () {
            var quarterValue = addUpCoins.extractCoinValue(mock.object.quarter)
            var dimeValue = addUpCoins.extractCoinValue(coins.dime)
            var nickelValue = addUpCoins.extractCoinValue(coins.nickel)
            expect(quarterValue).to.be.equal(0.25)
            expect(dimeValue).to.be.equal(0.10)
            expect(nickelValue).to.be.equal(0.05)
        })

        it('should add up all coins', function () {
            var sum = addUpCoins.determineCoinSum(coinsToBeInserted)
            expect(sum).to.be.equal(0.75)
        })

        it('should add up all coins and ignore the bad coins', function () {
            var sum = addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
            expect(sum).to.be.equal(0.75)
        })

        //Sinon Spies
        it('should call the callback', () => {
            //Creates an annonymous function that records arguments
            var annonSpy = sinon.spy()
            //Spies on the provided function
            //var functionSpy = sinon.spy("addUpCoins.determineCoinSum")

            //Creates a spy for object.method and replaces original method with spy
            var objectMethodSpy = sinon.spy(addUpCoins, "determineCoinSum")
            objectMethodSpy.withArgs(coinsToBeInsertedWithBadCoins)
            objectMethodSpy.determineCoinSum(coinsToBeInsertedWithBadCoins)
            assert(objectMethodSpy.withArgs(coinsToBeInsertedWithBadCoins).calledOnce)
            
        })




    })

})