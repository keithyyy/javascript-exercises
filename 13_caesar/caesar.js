const caesar = function(str, shift) {

    let strArray = str.split('')

    // let charCode = str.charCodeAt() + shift
    let cipher = strArray.map(element => {
        let char = 0
        
        if (typeof element !== 'string') {
            char = element.charCodeAt()
        } else {
            char = element.charCodeAt() + shift
        }

        return String.fromCharCode(char)
    })

    return cipher.join("")

};

// Do not edit below this line
module.exports = caesar;
