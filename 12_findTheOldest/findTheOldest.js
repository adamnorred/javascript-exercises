const findTheOldest = function (obj) {
  return obj.reduce(function (total, currentValue) {
    const date = new Date();
    let currentYear = date.getFullYear();

    if (total["yearOfDeath"] === undefined) {
      total["yearOfDeath"] = currentYear;
    }
    if (currentValue["yearOfDeath"] === undefined) {
      currentValue["yearOfDeath"] = currentYear;
    }

    if (
      total.yearOfDeath - total.yearOfBirth >
      currentValue.yearOfDeath - currentValue.yearOfBirth
    ) {
      return total;
    }
    return currentValue;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
