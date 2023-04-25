const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce(function (total, currentValue) {
    return total + currentValue;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, currentValue) => total * currentValue);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0 || a === 1) {
    return 1;
  }

  for (let i = a - 1; i > 1; i--) {
    a *= i;
  }

  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
