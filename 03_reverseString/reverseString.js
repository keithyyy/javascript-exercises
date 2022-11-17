const reverseString = function(OGstring) {
    
    let result = []

    for (let index = 0; index < OGstring.length; index++) {
        let letter = OGstring[index];

        result.unshift(letter)

    }

    return result.join("").toString()
};

// Do not edit below this line
module.exports = reverseString;
