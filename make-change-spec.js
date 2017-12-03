'use strict';
var expect = require('chai').expect;

var makeChange = ""
var coins = require('./coins')

var coinsToBeInserted = [coins.quarter, coins.nickel, coins.dime, coins.dime, coins.quarter]
var coinsToBeInsertedWithBadCoins= [coins.quarter, coins.penny, coins.dime, coins.dime, coins.quarter, coins.nickel]
var noCoinsToBeInserted = []
var product = require('./product')




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
            console.log(product)
            var expectedSum = product.cola.value
            var actualSum = makeChange.returnAmountOwedToMachine(selection)
            expect(actualSum).to.equal(expectedSum)

        })

        //MAKE CHANGE
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


        //RETURN COINS
        it('should return the total amount of coins put in', function(){
            var display = "INSERT COIN"
            var enteredCoins = 'quarter quarter quarter dime dime dime'
            var coinArray = enteredCoins.split(" ")
            var amountEntered = makeChange.returnAmountPutIntoMachine(coinArray)
            var returnedCoins = makeChange.returnTotalCoinsToCustomer(amountEntered)
            expect(returnedCoins).to.equal(amountEntered)
            expect(display).to.equal(makeChange.updateDisplay())

        })

    })

})