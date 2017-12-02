'use strict';
var expect = require('chai').expect;

var makeChange = ""

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

//As a vendor
//I want customers to receive correct change
//So that they will use the vending machine again
//When a product is selected that costs less than the amount of money in the machine, 
//then the remaining amount is placed in the coin return.



var coinsToBeInserted = [quarter, nickel, dime, dime, quarter]
var coinsToBeInsertedWithBadCoins= [quarter, penny, dime, dime, quarter, nickel]
var noCoinsToBeInserted = []



describe('All tests', () => {
    
    beforeEach(function(){
        makeChange = require('./make-change');
    
    })

    describe('make-change exists', function() {
        it('should exist', function() {
            expect(makeChange).to.not.be.undefined;
        });
    });

    describe('should test functionality of make-change', function(){
        it('should return the proper amount owed to machine', function(){
            var selection = 'quarter dime dime dime'
            var array = selection.split(" ")
            var expectedSum = '0.55'
            var actualSum = makeChange.returnProperAmountOwedToMachine(array)
            expect(expectedSum).to.equal(actualSum)
        })
    })

})