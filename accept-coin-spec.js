'use strict';
var expect = require('chai').expect;

//nickels are 21.21mm, 5g
var acceptCoin = "";


beforeEach(function(){
    acceptCoin = require('./accept-coin');
})

describe('accept-coin-exists', function() {
    it('should exist', function() {
        expect(acceptCoin).to.not.be.undefined;
    });
});

describe('The Coin is Valid', function(){
    it('is a nickel', function(){
        var nickelWeight = 5;
        var nickelSize = 21.21;
        var valid = acceptCoin.isNickel(nickelSize, nickelWeight)
        expect(valid).is.true
    })

    it('is not a nickel', function(){
        var nickelWeight = 8;
        var nickelSize = 21.21;
        var valid = acceptCoin.isNickel(nickelSize, nickelWeight)
        expect(valid).is.false
    })

    it('is a dime', function(){
        var dimeWeight = 2.268;
        var dimeSize = 17.91;
        var valid = acceptCoin.isDime(dimeSize, dimeWeight)
        expect(valid).is.true;

    })

    it('is a quarter', function(){
        var quarterWeight = 5.670
        var quarterSize = 24.26;
        var valid = acceptCoin.isQuarter(quarterSize, quarterWeight)
        expect(valid).is.true;

    })

    it('is an acceptable coin', function(){
        var coinWeight = 5;
        var coinSize = 12;
        var valid = acceptCoin.isAcceptableCoin(coinSize, coinWeight)
        expect(valid).is.false
        
    })


})




