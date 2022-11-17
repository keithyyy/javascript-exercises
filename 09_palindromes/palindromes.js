const palindromes = function (ogString) {
    let splitStr = []
    let strippedOg = ogString.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase()
    
    for (let index = 0; index < strippedOg.length; index++) {
        const element = strippedOg[index];
        splitStr.unshift(element)    
    }

    let strReversed = splitStr.join("")

    if (strReversed == strippedOg) {
        return true
    } else {
        return false
    }


};

// Do not edit below this line
module.exports = palindromes;
