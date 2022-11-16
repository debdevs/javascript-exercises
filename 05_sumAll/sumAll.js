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

  for (var n = 0; n < nums.length; n++) {
    sum += parseInt(nums[n]);
    if (
      first < 0 ||
      second < 0 ||
      Number.isInteger(first) == false ||
      Number.isInteger(second) == false
    ) {
      console.log(first);
      sum = 'ERROR';
    } else if (first || second > 0) {
      sum = sum;
    }
  }
  // npm test sumAll.spec.js
  return sum;
};

console.log(sumAll(1, 9));
// Do not edit below this line
module.exports = sumAll;
