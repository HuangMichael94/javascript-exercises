const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(args) {
  return args.reduce((total, num) => total + num, 0);
};

const multiply = function(args) {
  return args.reduce((total, num) => total * num, 1)
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  // create array of 1-num, then use reduce() to multiple all values of the array
  let nums = []
  for (let i = 1; i <= num; i++) {
    nums.push(i)
  }
  return nums.reduce((total, currValue) => total * currValue, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
