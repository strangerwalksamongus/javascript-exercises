const removeFromArray = function(arr, remove) {
    let newArr = [];
    let result = "";
    for (remove of arr) {
        newArr = arr - remove;
        result = newArr.join("");
    }
    return result;


};

// Do not edit below this line
module.exports = removeFromArray;
