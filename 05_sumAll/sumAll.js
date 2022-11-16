const sumAll = function (first, second) {
  /* console.log(Math.max(...arguments)) */

  let prev_val = [];

  for (let i = 1; i < Math.max(...arguments) + 1; i++) {
    prev_val.push(i);

    let vals = (prev_val[i - 2] =
      prev_val[i - 2] === undefined ? 0 : prev_val[i - 2]);

    vals += i;
  }

  var nums = prev_val;
  var sum = 0;
  //   console.log(prev_val);
  if (Number.isInteger(first) == false || Number.isInteger(second) == false) {
    sum = 'ERROR';
  } else if (
    Number.isInteger(first) == true ||
    Number.isInteger(second) == true
  ) {
    sum = sum;

    for (var n = 0; n < nums.length; n++) {
      sum += parseInt(nums[n]);

      if (first < 0 || second < 0) {
        sum = 'ERROR';
      } else {
        console.log('TE', sum);
        sum = sum;
      }
    }
  }

  // npm test sumAll.spec.js
  return sum;
};

console.log(sumAll(1, [1, 9]));
// Do not edit below this line
module.exports = sumAll;
