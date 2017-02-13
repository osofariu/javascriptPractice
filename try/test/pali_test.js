var expect = require('chai').expect;
var Palindrome = require('../src/palindrome.js');

var pali;

beforeEach(function() {
    pali = new Palindrome();
})

describe('basic palindrome without punctiation', function() {
    it('recognizes a simple palindrome', function() {
        expect(pali.check('mom')).to.be.true;
    });
});








/*

This  siht  // ok - case doesn't matter
bob
boob
table el bat // ok - we ignore spaces:
''
' '
'  '
a
aa
aaa
aaaa

abba
aba

madam
madam or nurses run

- empty (ok)
- one character (ok)
- two same (ok)
- two different (bad)
- string of any length of one charater (ok) -- property test ideal
- 

*/
