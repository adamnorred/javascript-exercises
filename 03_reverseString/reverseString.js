const reverseString = function (input) {
  let splitStringToArray = input.split("");
  let reverseArray = splitStringToArray.reverse();
  let joinArray = reverseArray.join("");

  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
