const add = function(num1, num2) {
  let result = num1 + num2
  return result
};

const subtract = function(num1, num2) {
  let result = num1 - num2
  return result
};

const sum = function(array) {
  if (array.length == 0) {
    return 0
  } else {
    let result = 0    
      for (let index = 0; index < array.length; index++) {
      const element = array[index]
      result += element 
      }
    return result
  };
};

const multiply = function(array) {
  if (array.length == 0) {
    return 0
  } else {
    let result = 1
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      result *= element
    }
    return result

  }

};

const power = function(num1, num2) {
  let result = num1**num2
  return result
	
};

const factorial = function(num) {
  if (num == 0 | num ==1) {
    return 1
  } else {
    return num * factorial(num -1)
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
