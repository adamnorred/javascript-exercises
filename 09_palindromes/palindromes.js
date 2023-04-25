function reverseString(str) {
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

function removePunctuation(str) {
  return str.replace(/[^A-Za-z0-9\s]/g, "");
}

function removeWhitespaces(str) {
  return str.replace(/\s/g, "");
}

const palindromes = function (text) {
  const textLower = text.toLowerCase();
  const textNoPunctuation = removePunctuation(textLower);
  const cleanText = removeWhitespaces(textNoPunctuation);
  const reversedText = reverseString(cleanText);

  return cleanText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
