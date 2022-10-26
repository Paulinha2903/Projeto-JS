"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("Conversor de Celsius para Kelvin: \n");

var C = _readlineSync["default"].question("Informe o valor em Celsius: ");

var K = Number(C) + 273.15;
console.log(C + "ºC equivale a " + K + "K");
//# sourceMappingURL=conv temp.dev.js.map
