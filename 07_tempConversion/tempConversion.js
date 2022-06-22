const ftoc = function(value1) {
  finalResult1 = Math.round(((value1 - 32) * 5/9) * 10)/10;
return finalResult1;
};

const ctof = function(value2) {
  finalResult2 = Math.round((value2 * 9/5 + 32) * 10)/10;
return finalResult2;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
