const findTheOldest = function(people) {


    let thisYear = new Date().getFullYear()

    let oldestPerson = people.reduce((result, person) => {

        // first, we calculate age. If there's a year of death, use that minus year of birth.
        // If no year of death, use today's year - year of birth to get age.
        let age = (person.yearOfDeath || thisYear) - person.yearOfBirth


        // if the age calculated for this item in array is more than previous item, then return obj of
        // {
        //  person: people[i],
        //  age: age
        // }

        if (age > result.age) {
            return {person, age}
        } else {
            return result
        }


    }, {person: null, age: 0})

    return oldestPerson.person

    // const sortedPeople = people.sort((a,b) => {
    //     let previousPerson = a.yearOfDeath - a.yearOfBirth
    //     let nextPerson = b.yearOfDeath - b.yearOfBirth
    //     if (previousPerson > nextPerson) {
    //         return -1
    //     } else {
    //         return 1
    //     }
    // })
  
    // return sortedPeople[0]
}



// Do not edit below this line
module.exports = findTheOldest;
