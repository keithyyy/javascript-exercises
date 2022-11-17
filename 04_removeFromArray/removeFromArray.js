const removeFromArray = function(array, selector) {
    
    for (let i = 0; i < array.length; i++) {
        
        let element = array[i]

        if (element === selector) {
            let index = array.indexOf(element)
            array.splice(index, 1)
            return array
        }
        
        
    }


};

// Do not edit below this line
module.exports = removeFromArray;
