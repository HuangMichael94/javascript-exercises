const palindromes = function (string) {
  str = string.toLowerCase();
  str = str.trim();
  str = str.replace(" ", "");
  str = str.replace(/[^0-9a-z]/gi, '');

  reverse = str.split("");
  reverse = reverse.reverse();
  reverse = reverse.join("");

  return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
