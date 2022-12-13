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


  
  if (Array.isArray(args[0])){

    const initial = 0
    const sum = args[0].reduce(
      
      (accumulator, currentValue) => accumulator + currentValue, initial
      
      
      )
    
    
    return parseInt(sum)
  
  
  }
  
  else
  {
    const initial = 0
    const sum = args.reduce(
      
      (accumulator, currentValue) => accumulator + currentValue, initial
      
      
      )
    
    
    return parseInt(sum)
  
  }
   


};

const multiply = function (...args) {


if (Array.isArray(args[0])){

  const initialValue = 1;
  const sumWithInitial = args[0].reduce(
    (accumulator, currentValue) =>    (accumulator) *  currentValue  ,
    initialValue
  );
  
  return(sumWithInitial)


}

else
{
  const initialValue = 1;
  const sumWithInitial = args.reduce(
    (accumulator, currentValue) =>    (accumulator) *  currentValue  ,
    initialValue
  );
  
  return(sumWithInitial)

}


};

const power = function (base,power) {


	result = Math.pow(base, power)
  console.log(result)
  return result




};

const factorial = function (number) {


	let number_array = []

    let i = 0
    while (i<number){
     i++
      number_array.push(i)
    }
  const initial = 1
  const sum = number_array.reduce(
    
    (accumulator, currentValue) => accumulator * currentValue, initial
    
    
    )
  
  console.log(sum)
  console.log(number_array)
  return parseInt(sum)



};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
