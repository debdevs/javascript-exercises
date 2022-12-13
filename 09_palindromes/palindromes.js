const palindromes = function (str) {

    let input = str
   
    let compare_result = str.split(",").join("").toLowerCase().replace(".","")

	let compare_result_1 = compare_result.split("").reverse().join("")


    let result = str.split(",").join("").toLowerCase().replace(".","")
    let status = null

    if (compare_result == result){
        status = true
    } else{
        status = false
    }
  console.log(compare_result_1.split(" ").join(""))
	console.log(result.split(" ").join(""))
    return status
    


};

// Do not edit below this line
module.exports = palindromes;
