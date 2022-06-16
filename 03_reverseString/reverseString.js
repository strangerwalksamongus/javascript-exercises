// loop only
// let newStr = ""; // if declared globally, return will store it here, to be used when the function gets called again (NOT WANTED IN THIS CASE)

// const reverseString = function(str) {
//     let newStr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;

// };

// substring array

const reverseString = function(str) {

    let toArray = str.split("");
    let reverseArray = toArray.reverse();
    let newStr = reverseArray.join("");
    return newStr;

};

// Do not edit below this line
module.exports = reverseString;
