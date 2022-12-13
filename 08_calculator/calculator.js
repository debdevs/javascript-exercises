const add = function (...args) {


const initial = 0
const sum = args.reduce(
  
  (accumulator, currentValue) => accumulator + currentValue, initial
  
  
  )


return sum



};

const subtract = function (...args) {
  const initialValue = 0;
  const sumWithInitial = args.reduce(
    (accumulator, currentValue) =>   currentValue - accumulator    ,
    initialValue
  );
  
  return(sumWithInitial*-1);
  // expected output: 10
  
  

//npm test calculator.spec.js

};

const sum = function (...args) {

  const initial = 0
  const sum = args.reduce(
    
    (accumulator, currentValue) => accumulator + currentValue, initial
    
    
    )
  
  
  return parseInt(sum)
  


};

const multiply = function (...args) {




  const initialValue = 1;
  const sumWithInitial = args.reduce(
    (accumulator, currentValue) =>    (accumulator) *  currentValue  ,
    initialValue
  );
  
  return(sumWithInitial);


};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
