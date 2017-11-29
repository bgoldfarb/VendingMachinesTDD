'use strict';
var expect = require('chai').expect;

var addUpCoins = "";
var quarterValue = "";
var dimeValue = "";
var nickelValue = "";
var totalValue = "";

var coinsToBeInserted = [0.25, .05, .10, 0.10, 0.25]
var coinsToBeInsertedWithBadCoins= [0.25, .01, .01, 1.00, .10, 0.10, 0.25, .05]
var noCoinsToBeInserted = []


describe('All tests', () => {
beforeEach(function(){
    addUpCoins = require('./add-up-coins');
    quarterValue = 0.25;
    dimeValue = .10;
    nickelValue = .5;
    totalValue = 0.40
})


describe('add-up-coin-exists', function() {
    it('should exist', function() {
        expect(addUpCoins).to.not.be.undefined;
    });
});



describe('Coin Sum Functionality', function() {
    it('should determine what coins have been inserted and sum values', function() {
     var coinSum = addUpCoins.determineCoinSum(coinsToBeInserted)
     expect(coinSum).to.be.equal(0.75)
    });

    it('should ignore bad coins and give correct sum', function(){
        var coinSum = addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
        expect(coinSum).to.be.equal(0.75)
    })
    it('should add  coins to the running sum', function(){
        var coinSum = addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
        var coinSum2 = addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
        var coinSum3 = addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
        var totalSum = coinSum+coinSum2+coinSum3
        expect(totalSum).to.be.equal(2.25)
    })

    it('should display, insert coin when no coins are inserted', function(){
        var coinString = addUpCoins.determineCoinSum(noCoinsToBeInserted)
        expect(coinString).to.be.equal("INSERT COIN")
    })

    

});

})