const getTheTitles = function(args) {
    let titles = [];
    for (let i = 0; i < args.length; i++) {
        titles.push(args[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
