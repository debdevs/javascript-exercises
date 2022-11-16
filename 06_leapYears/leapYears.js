const leapYears = function (year) {
  let output = null;
  if (year % 4 == 0 && year % 100 != 0) {
    output = true;
  } else if (year % 4 == 0 && year % 400 == 0) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

console.log(leapYears(1996));
//npm test leapYears.spec.js
// Do not edit below this line
module.exports = leapYears;
