'use strict';
var expect = require('chai').expect;

//nickels are 21.21mm, 5g



describe('accept-coin-exists', function() {
    it('should exist', function() {
        var acceptCoin = require('./accept-coin');
        expect(acceptCoin).to.not.be.undefined;
    });
});

describe('The Coin is Valid', function(){
    it('is a nickel', function(){
        var acceptCoin = require('./accept-coin');        
        var nickelWeight = 5;
        var nickelSize = 21.21;
        var valid = acceptCoin.isNickel(nickelSize, nickelWeight)
        expect(valid).is.true
    })

    it('is not a nickel', function(){
        var acceptCoin = require('./accept-coin');        
        var nickelWeight = 8;
        var nickelSize = 21.21;
        var valid = acceptCoin.isNickel(nickelSize, nickelWeight)
        expect(valid).is.false
    })
})


