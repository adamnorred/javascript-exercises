const removeFromArray = function (items, ...args) {
  for (const arg of args) {
    if (items.includes(arg)) {
      const index = items.indexOf(arg);
      items.splice(index, 1);
    }
  }
  return items;
};
// Do not edit below this line
module.exports = removeFromArray;
