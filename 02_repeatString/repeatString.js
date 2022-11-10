const repeatString = function (input, number) {
  let text = '';
  for (let i = 0; i < number; i++) {
    text += input;
  }
  return text;
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
