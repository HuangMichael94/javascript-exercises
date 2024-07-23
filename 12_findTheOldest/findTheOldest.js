const findTheOldest = function(args) {
    let person = args[0]
    let oldestAge = 0;

    for (let i = 0; i < args.length; i++) {
        if (!args[i].yearOfDeath) {
            age = 2024 - args[i].yearOfBirth;

            if (age > oldestAge) {
                person = args[i];
                oldestAge = args[i].yearOfDeath-args[i].yearOfBirth;
            }
        }


        else {
            if (args[i].yearOfDeath-args[i].yearOfBirth > oldestAge) {
                person = args[i];
                oldestAge = args[i].yearOfDeath-args[i].yearOfBirth;
            }
        }
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
