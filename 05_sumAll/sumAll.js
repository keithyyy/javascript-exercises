const sumAll = function(num1, num2) {

    let diff = Math.abs(num2-num1)
    let sumArray = [num1, num2]
    let finalSum = 0

    for (let index = 1; index < diff; index++) {
        let numItem = num1 + index
        sumArray.push(numItem)
    }

    sumArray.forEach(element => {
        finalSum += element
        
    });

    return finalSum

};

// Do not edit below this line
module.exports = sumAll;
