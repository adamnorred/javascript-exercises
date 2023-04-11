const convertToCelsius = function (fahr) {
  const celsius = (fahr - 32) * (5 / 9);
  const roundNumber = Math.round(celsius * 10) / 10;
  return roundNumber;
};

const convertToFahrenheit = function (cels) {
  const fahrenheit = cels * 1.8 + 32;
  const roundNumber = Math.round(fahrenheit * 10) / 10;
  return roundNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
