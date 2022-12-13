const palindromes = function (str) {

    let input = str
   
    let compare_result = str.split(",").join("").toLowerCase().replace(".","")
	let compare_result_1 = compare_result.split("").reverse().join("")
    let compare_result_2 = compare_result_1.split("!").join("")


    let result = str.split(",").join("").toLowerCase().replace(".","")
    let result_2 = result.split("!").join("")
    let status = null

    if (compare_result_2.split(" ").join("") == result_2.split(" ").join("")){
        status = true
    } else{
        status = false
    }
    console.log(compare_result_2.split(" ").join(""))
	console.log(result_2.split(" ").join(""))
    console.log(status)
    return status
    


};

// Do not edit below this line
module.exports = palindromes;
