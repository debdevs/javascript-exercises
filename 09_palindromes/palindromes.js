const palindromes = function (str) {
    let input = str
    let compare = input.split("").reverse().join("")
    let compare_result = input.split(",").reverse().join("").toLowerCase()



    let reverse = str.split("").reverse().join("")
    let result = str.split(",").join("").toLowerCase()
    let status = null

    if (compare_result == result){
        status = true
    } else{
        status = false
    }

    return status

};

// Do not edit below this line
module.exports = palindromes;
