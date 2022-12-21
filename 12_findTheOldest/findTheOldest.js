    
   const findTheOldest = function(input) {
    const d = new Date()
    let day = d.getFullYear()
    console.log(day)
    let ages = []
    let oldest_person = {}
    for (let i =0; i < input.length; i++){
        
        if (input[i].yearOfDeath){
            console.log(input[i].yearOfDeath - input[i].yearOfBirth)
            input[i].age = input[i].yearOfDeath - input[i].yearOfBirth; 
            
        } else{
            
            console.log(day- input[i].yearOfBirth)
            input[i].age = day - input[i].yearOfBirth; 
   
        }


    }
        for (let i =0; i < input.length; i++){
          ages.push(parseInt(input[i].age))
   

      }   
      
      
      
      
       let oldest = Math.max.apply(Math, ages)
       
        for (let i =0; i < input.length; i++){
          ages.push(parseInt(input[i].age))
          if (input[i].age == oldest){
              console.log(input[i].name)
              oldest_person.name = input[i].name
          }

      }         
       
       
      console.log(input , Date())
      console.log(oldest_person)
      let name = oldest_person
      return oldest_person
};
    
    

// Do not edit below this line
module.exports = findTheOldest;
