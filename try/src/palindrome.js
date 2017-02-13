class Palindrome {

    check(str) {
        let reversed = str.split("").reverse().join("");
        return str === reversed;
    }
}

module.exports = Palindrome;