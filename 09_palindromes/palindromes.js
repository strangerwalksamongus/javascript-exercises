const palindromes = function (inputValue) {

let newArr = inputValue.toLowerCase().replace(/[!?.,&^%$#*(){}\s]/g, ""); // add the symbols to remove between the [] -> THE SPACE IS \s
// console.log(newArr);

return newArr.split("").reverse().join("") == newArr;

};

// Do not edit below this line
module.exports = palindromes;
