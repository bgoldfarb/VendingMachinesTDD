'use strict';
var expect = require('chai').expect;

describe('accept-coin-exists', function() {
    it('should exist', function() {
        var acceptCoin = require('./accept-coin');
        expect(acceptCoin).to.not.be.undefined;
    });
});