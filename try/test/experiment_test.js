var expect = require('chai').expect;

describe('util test', function() {
    let f = (arg) => {
        if (arg === 12) {throw 'not 12';}
        return arg + 1;};
    let g = f;
    let h = (arg) => arg + 1;

    it('compare functions as values', function() {
       expect(f).to.eq(g);
       expect(f).to.equal(g);
       expect(f).not.to.equal(h);
    });

    it('check for exceptions', function () {
        expect(f).not.to.throw;
        expect(() => f(12)).to.throw('not 12');
    })

    it('compare function evaluation', function () {
        expect(f(10)).to.equal(g(10));
        expect(f(10)).not.to.equal(g(11));
    })

    it('cannot compare functiona dynamically', function () {
        expect(() => f(1)).to.not.equal(() => f(1));
        expect(() => f(1)).not.to.equal(() => f(2));
    })
});

