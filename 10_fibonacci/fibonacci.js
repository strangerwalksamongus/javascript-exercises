const fibonacci = function(number) {
    let arr = [1, 1];
    
    for (let i = 1; i < number; i++) {
        let lastEntry = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(lastEntry);
        console.log(arr);
    };
    if (number >= 0) {
        return arr[number - 1];
    }
    else return "OOPS"

};

// Do not edit below this line
module.exports = fibonacci;
