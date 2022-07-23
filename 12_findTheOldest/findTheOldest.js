const findTheOldest = function(people) {
    return people.reduce(function(olderPerson, currentPerson) {
        let oldestAge = findAge(olderPerson.yearOfBirth, olderPerson.yearOfDeath);
        let currentAge = findAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestAge < currentAge) {
            return currentPerson;
        }
        else return olderPerson;

    })                  /// DOESNT FUCKING WOTK
    
};

let findAge = function(born, died) {
    if (died !== true) {
        died = new Date().getFullYear();
    }
    return died - born;
}

// Do not edit below this line
module.exports = findTheOldest;
