const sumAll = function(a, b) {
    let sum = 0;
    if (a > b) {
        let temp = b;
        b = a;
        a = temp;
    }
    else if ((Number.isInteger(a) == false) || (Number.isInteger(b) == false)) return "ERROR";

    for (let i = a; i <= b; i++) {
        if (a < 0 || b < 0) return ("ERROR");

        else sum += i;
    }
    return sum;



};

// Do not edit below this line
module.exports = sumAll;
