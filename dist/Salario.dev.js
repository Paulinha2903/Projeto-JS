"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var salarioMinimo = [{
  ano: 2010,
  salario: 510.00
}, {
  ano: 2011,
  salario: 545.00
}, {
  ano: 2012,
  salario: 622.00
}, {
  ano: 2013,
  salario: 678.00
}, {
  ano: 2014,
  salario: 724.00
}, {
  ano: 2015,
  salario: 788.00
}, {
  ano: 2016,
  salario: 880.00
}, {
  ano: 2017,
  salario: 937.00
}, {
  ano: 2018,
  salario: 954.00
}, {
  ano: 2019,
  salario: 998.00
}, {
  ano: 2020,
  salario: 1045.00
}];
var inflacao = [{
  ano: 2010,
  ipca: 5.91
}, {
  ano: 2011,
  ipca: 6.50
}, {
  ano: 2012,
  ipca: 5.84
}, {
  ano: 2013,
  ipca: 5.91
}, {
  ano: 2014,
  ipca: 6.41
}, {
  ano: 2015,
  ipca: 10.67
}, {
  ano: 2016,
  ipca: 6.29
}, {
  ano: 2017,
  ipca: 2.95
}, {
  ano: 2018,
  ipca: 3.75
}, {
  ano: 2019,
  ipca: 4.31
}, {
  ano: 2020,
  ipca: 4.52
}];
console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários minímos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

var escolha = _readlineSync["default"].question("Digite o numero da sua escolha: ");

escolha = Number(escolha);
var anoLabel = "Ano: ";
var salarioLabel = "Salário mínimo: ";
var crescimentoLabel = "Crescimento Salarial: ";
var ipcaLabel = "Inflação IPCA: ";
anoLabel = anoLabel.padEnd(30, '.');
salarioLabel = salarioLabel.padEnd(30, '.');
crescimentoLabel = crescimentoLabel.padEnd(30, '.');
ipcaLabel = ipcaLabel.padEnd(30, '.');

switch (escolha) {
  case 1:
    for (var i = 0; i <= salarioMinimo.length - 1; i++) {
      var ano = salarioMinimo[i].ano;
      var salario = salarioMinimo[i].salario;
      var salarioFormatado = salario.toFixed(2).replace(".", ",");
      console.log("\n");
      console.log(anoLabel + ano);
      console.log(salarioLabel + "R$ " + salarioFormatado);
    }

    break;

  case 2:
    for (var _i = 0; _i <= inflacao.length - 1; _i++) {
      var _ano = inflacao[_i].ano;
      var ipca = inflacao[_i].ipca;
      var ipcaFormatado = ipca.toFixed(2).replace(".", ",");
      console.log("\n");
      console.log(anoLabel + _ano);
      console.log(ipcaLabel + ipcaFormatado + "%");
    }

    break;

  case 3:
    for (var _i2 = 0; _i2 <= salarioMinimo.length - 1; _i2++) {
      var _ano2 = salarioMinimo[_i2].ano;
      var _salario = salarioMinimo[_i2].salario;
      var percentualCrescimento = void 0;
      var crescimentoFormatado = void 0;

      if (_i2 > 0) {
        var salarioAnterior = salarioMinimo[_i2 - 1].salario;
        var diferenca = _salario - salarioAnterior;
        percentualCrescimento = diferenca / salarioAnterior * 100;
        crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",") + "%";
      } else {
        crescimentoFormatado = "-";
      }

      var _ipca = inflacao[_i2].ipca;

      var _salarioFormatado = _salario.toFixed(2).replace(".", ",");

      var _ipcaFormatado = _ipca.toFixed(2).replace(".", ",");

      console.log("\n");
      console.log(anoLabel + _ano2);
      console.log(salarioLabel + "R$ " + _salarioFormatado);
      console.log(crescimentoLabel + crescimentoFormatado);
      console.log(ipcaLabel + _ipcaFormatado + "%");
    }

    break;

  default:
    console.log("Opção Inválida!");
    break;
}
//# sourceMappingURL=Salario.dev.js.map
