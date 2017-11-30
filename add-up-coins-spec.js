'use strict';
var expect = require('chai').expect;

var addUpCoins = ""

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



var coinsToBeInserted = [quarter, nickel, dime, dime, quarter]
var coinsToBeInsertedWithBadCoins= [quarter, penny, dime, dime, quarter, nickel]
var noCoinsToBeInserted = []


describe('All tests', () => {

beforeEach(function(){
    addUpCoins = require('./add-up-coins');

})


describe('add-up-coin-exists', function() {
    it('should exist', function() {
        expect(addUpCoins).to.not.be.undefined;
    });
});



describe('Coin Sum Functionality', function() {


    it('should extract all values from coin objects', function(){
        var quarterValue = addUpCoins.extractCoinValue(quarter)
        var dimeValue = addUpCoins.extractCoinValue(dime)
        var nickelValue = addUpCoins.extractCoinValue(nickel)
        expect(quarterValue).to.be.equal(0.25)
        expect(dimeValue).to.be.equal(0.10)
        expect(nickelValue).to.be.equal(0.05)
    })

    it('should add up all coins', function(){
        var sum = addUpCoins.determineCoinSum(coinsToBeInserted)
        expect(sum).to.be.equal(0.75)
    })

    it('should add up all coins and ignore the bad coins', function(){
        var sum = addUpCoins.determineCoinSum(coinsToBeInsertedWithBadCoins)
        expect(sum).to.be.equal(0.75)
    })

    it('should return all the bad coins', function(){
       var coins = addUpCoins.returnRejectedCoins()
       expect(coins).to.be.equal(0.01)
    })


});

})