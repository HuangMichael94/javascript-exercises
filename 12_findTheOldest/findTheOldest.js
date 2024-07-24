const getAge = function(birth, death) {
    if (!death) {
        return (new Date().getFullYear()) - birth;
    }
    else {
        return death - birth;
    }
}

const findTheOldest = function(args) {
    return args.reduce((last, current) => {
        let currAge = getAge(current.yearOfBirth, current.yearOfDeath);
        let lastAge = getAge(last.yearOfBirth, last.yearOfDeath);
        
        return currAge > lastAge ? current : last;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
