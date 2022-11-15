const removeFromArray = function (array_input, ...args) {
  let arr = array_input;
  let number_input = args;
  let output_array = arr.filter(
    (filtered_item) => !number_input.includes(filtered_item)
  );
  console.log(output_array);
  return output_array;
};

// Do not edit below this line

// Do not edit below this line
module.exports = removeFromArray;
