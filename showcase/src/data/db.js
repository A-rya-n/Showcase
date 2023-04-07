var firstRoute = require("./shops.json");
var secondRoute = require("./products.json");

module.exports = function () {
  return {
    firstRoute: firstRoute,
    secondRoute: secondRoute,
  };
};
