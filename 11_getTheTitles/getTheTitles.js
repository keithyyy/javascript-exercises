const getTheTitles = function(bookArray) {
    let titles = []

    bookArray.forEach(element => {
        titles.push(element.title)
    });

    return titles

};

// Do not edit below this line
module.exports = getTheTitles;
