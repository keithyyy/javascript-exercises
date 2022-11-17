const repeatString = function(word, multiplier) {
    
    let wordBank = []

    for (let index = 0; index < multiplier; index++) {
        
        wordBank.push(word)
        
    }

    let finalWord = wordBank.join("")
        return finalWord    
};

// Do not edit below this line
module.exports = repeatString;
