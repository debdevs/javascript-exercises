
const getTheTitles = function(books) {

    const book_array = []
    for (let i = 0; i < books.length; i++) {
      book_array.push(books[i].title)
    }
    
    const edited_array = book_array
    console.log("New Array", edited_array)
    return edited_array

};

// Do not edit below this line
module.exports = getTheTitles;
