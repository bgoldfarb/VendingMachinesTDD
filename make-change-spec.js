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

var product = {
    cola: {
        value: 1.00
    },
    chips: {
        value: 0.50

    },
    candy: {
        value: 0.65
    }
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
        it('should return the proper amount entered to machine', function(){
            var enteredCoins = 'quarter dime dime dime'
            var array = enteredCoins.split(" ")
            var expectedSum = '0.55'
            var actualSum = makeChange.returnAmountPutIntoMachine(array)
            expect(expectedSum).to.equal(actualSum)
        })

        it('should not count pennies or other change not accepted', function(){
            var selection = 'quarter penny penny dollar dime dime dime'
            var array = selection.split(" ")
            var expectedSum = '0.55'
            var actualSum = makeChange.returnAmountPutIntoMachine(array)
            expect(expectedSum).to.equal(actualSum)
        })

        it('should return the amount of coins owed to the machine', function(){
            var selection = product.cola
            var expectedSum = product.cola.value
            var actualSum = makeChange.returnAmountOwedToMachine(selection)
            expect(actualSum).to.equal(expectedSum)

        })

        it('should return amount of coins to user if user enters too much money', function(){
            var enteredCoins = 'quarter quarter quarter dime dime dime'
            var coinArray = enteredCoins.split(" ")
            var amountEntered = makeChange.returnAmountPutIntoMachine(coinArray)

            var selection = product.cola
            var amountDue = makeChange.returnAmountOwedToMachine(selection)


            var expectedReturn = 0.05
            var difference = parseFloat(makeChange.subtractEnteredMoneyFromPrice(amountEntered,amountDue)).toFixed(2)
            var toReturnToCustomer = (makeChange.checkIfPriceRemainingIsGreaterThanZero(difference) ? difference *-1 : 0)
            expect(toReturnToCustomer).to.eql(expectedReturn)            


        })
 


    })

})