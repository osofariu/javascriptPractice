class Palindrome {


    check(str) {
        if (str == undefined) {
            throw 'Argument expected';
        }
        let cleanStr = str.split("").filter(isNotWhitespace).join("");
        if (cleanStr === '') {
            return false;
        }

        let reversed = cleanStr.split("").reverse().join("");
        return cleanStr === reversed;
    }
}

function isNotWhitespace(ch) {
    return ch.match(/\S/) != null;
}

module.exports = Palindrome;