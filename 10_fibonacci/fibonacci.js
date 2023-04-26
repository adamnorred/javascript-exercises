const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  if (typeof num === "string") {
    num = Number(num);
  }
  if (num === 1) {
    return 1;
  }

  let first = 0;
  let second = 1;
  let third = 0;

  for (let i = 1; i < num; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
};

// Do not edit below this line
module.exports = fibonacci;
