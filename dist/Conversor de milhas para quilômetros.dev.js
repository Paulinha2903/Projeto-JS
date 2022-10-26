"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("Conversor de Milhas para Quilômetros: \n");

var mi = _readlineSync["default"].question("Informe o valor em Milhas: ");

var km = mi / 0.62137;
console.log(mi + "mi equivale a " + km + "km");
//# sourceMappingURL=Conversor de milhas para quilômetros.dev.js.map
