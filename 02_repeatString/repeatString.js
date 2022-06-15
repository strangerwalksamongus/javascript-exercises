// const repeatString = function(string1, number) {

// let finalResult = string1.repeat(number);
// return finalResult;

// };

// // Do not edit below this line
// module.exports = repeatString;

//======================================================//

// let string1 = "";
// let result;
const repeatString = function(string1, number) {
    let result = "";
    if (number < 0) return "ERROR";
    
    for (let i = 0; i < number; i++) {
        result += string1;  
    }
    return result;


};

// Do not edit below this line
module.exports = repeatString;