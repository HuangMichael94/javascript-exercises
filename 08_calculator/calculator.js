const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(args) {
  returnTotal = 0;
  args.forEach(element => {
    returnTotal += element;
  });
  return returnTotal;
};

const multiply = function(args) {
  returnTotal = 1;
  for (let i = 0; i < args.length; i++) {
    returnTotal *= args[i];
  }
  return returnTotal;
};

const power = function(num1, num2) {
  returnTotal = 1;
  for (let i = 0; i < num2; i++) {
    returnTotal *= num1;
  }
  return returnTotal;
};

const factorial = function(num) {
  returnTotal = 1;
	for (let i = num; i > 0; i--) {
    returnTotal *= i;
  }
  return returnTotal;
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
