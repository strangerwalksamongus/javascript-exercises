const leapYears = function(year) {
    // input number divisible by 4 and NOT 100
    // if / by 4 AND 100 it ALSO HAS TO BE / 400

    if (year % 4 == 0 && year % 100 != 0) return true;
    else if (year % 4 != 0 || year % 4 == 0 && year % 100 == 0 && year % 400 != 0) return false;
    else return true;

};

// Do not edit below this line
module.exports = leapYears;
