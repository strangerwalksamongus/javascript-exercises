const add = function(a, b) {
	let add = a + b;
  return add;
};

const subtract = function(a, b) {
  return a - b; // too lazy to store in var
};

const sum = function(arrayGiven) {
let sumOfAll = arrayGiven.reduce(function(previous, next) {
  return previous + next;
}, 0)             // 0 is the initial value we start adding on top of
    return sumOfAll;
};

const multiply = function(arrayGiven) {
  let multiplyAll = arrayGiven.reduce(function(previous, next) {
    return previous * next;
  }, 1)             // 1 is the initial value we start multiplying on top of
      return multiplyAll;
};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(number) {
  let result = 1;
  if (number === 0) return 1;
  else if (number > 0) {
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
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
