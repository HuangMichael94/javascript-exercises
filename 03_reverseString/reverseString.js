const reverseString = function(str) {
    chars = str.split("");
    returnString = "";

    for (let i = chars.length-1; i > -1; i--){
        returnString += chars[i];
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
