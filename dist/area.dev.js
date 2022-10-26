"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("Área do triângulo: \n");

var base = _readlineSync["default"].question("Informe a base: ");

var altura = _readlineSync["default"].question("Informe a altura: ");

var area = base * altura / 2;
console.log("A área do triângulo é: " + area);
//# sourceMappingURL=area.dev.js.map
