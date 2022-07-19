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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
