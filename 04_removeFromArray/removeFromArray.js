const removeFromArray = function (input, number) {
  const array = input;
  const args = Array.from(arguments);
  arr = array.filter((item) => item !== number);

  let longest = '';
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest, arr;
};

// Do not edit below this line
module.exports = removeFromArray;
