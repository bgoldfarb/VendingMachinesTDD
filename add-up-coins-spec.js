'use strict';
var expect = require('chai').expect;

var addUpCoins = "";
var quarter = "";
var dime = "";
var nickel = "";
var total = "";

beforeEach(function(){
    addUpCoins = require('./accept-coin');
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
    it('should add up coins', function() {
       coin1 = quarterValue;
       coin2 = dimeValue;
       coin3 = dimeValue;
       total = 0.45
        totalValue = addUpCoins.addCoins(coin1, coin2, coin3)
        expect(totalValue).to.be.equal.to(total)

    });
});