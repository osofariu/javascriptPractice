var expect = require('chai').expect;
var Util = require('../src/temperature');

describe('f2c converts Fahrenheit to Celsius', function() {

    var util;

    beforeEach(function() {
        util = new Util();
    });
    
    it('32F is 0C', function() {

        expect(util.f2c(32)).to.equal(0);
    });

    it('50F is 10C', function() {
        expect(util.f2c(50)).to.equal(10);
    });

    it('AA converted to C throws exception', function() {
        expect(util.f2c('AA')).to.be.NaN;
    });
});

