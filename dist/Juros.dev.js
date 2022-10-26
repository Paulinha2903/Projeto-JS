"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("Aplicação de Juros: ");
var valor_juros;

var valor_divida = _readlineSync["default"].question("\nInforme o valor devido: R$ ");

if (valor_divida > 0) {
  var dias_vencimento = _readlineSync["default"].question("Informe quantos dias se passaram desde o vencimento do boleto: ");

  if (dias_vencimento > 0) {
    if (dias_vencimento > 15) {
      valor_juros = 10;
    } else {
      valor_juros = 5;
    }

    valor_divida = Number(valor_divida);
    dias_vencimento = Number(dias_vencimento);
    var total_juros = valor_divida / 100 * valor_juros;
    var valor_total = valor_divida + total_juros;
    console.log("\nValor original da dívida: R$ " + valor_divida);
    console.log("Dias atrasados: " + dias_vencimento);
    console.log("Taxa de Juros: " + valor_juros + "%");
    console.log("Valor total com juros: R$ " + valor_total);
  } else {
    console.log("Você está em dia!");
  }
} else {
  console.log("O valor da dívida deve ser maior que zero!");
}
//# sourceMappingURL=Juros.dev.js.map
