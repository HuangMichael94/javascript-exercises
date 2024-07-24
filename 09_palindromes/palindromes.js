const palindromes = function (string) {
  const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const str = string
  .toLowerCase()
  .split('')
  .filter((char) => valid.includes(char))
  .join('');

  return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
