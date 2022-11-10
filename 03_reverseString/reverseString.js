const reverseString = function (input) {
  text = '';
  let text_array = input.split('');
  for (let i = text_array.length - 1; i > -1; i--) {
    text += text_array[i];
  }
  return text;
};

// Do not edit below this line
module.exports = reverseString;
