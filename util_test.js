var expect = require('chai').expect;

describe('util test', function() {
    it('should pass the cannary test', function() {
        expect(true).to.eql(true);
        expect(false).to.eql(true);
    });
});
    
