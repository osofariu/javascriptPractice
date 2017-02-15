var expect = require('chai').expect;
var Palindrome = require('../src/palindrome.js');

var palindrome;

beforeEach(function() {
    palindrome = new Palindrome();
});

describe('basic palindrome without punctiation', function() {

    it('an empty phrase is not a palindrome', function () {
        expect(isPalindrome('')).not.to.be.true;
    });

    it('ignores spaces', function () {
        expect(isPalindrome('  ')).to.be.false;
        expect(isPalindrome('m o m')).to.be.true;
    });

    it('recognizes a simple palindrome', function() {
        expect(isPalindrome('mom')).to.be.true;
    });

    it('not a palindrome in a simple word', function () {
        expect(isPalindrome('abc')).to.not.be.true;
    });

    it('expects an argument', function () {
        expect(() => palindrome.check()).to.throw('Argument expected')
    });

    function isPalindrome(phrase) {
        return palindrome.check(phrase);
    }
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
