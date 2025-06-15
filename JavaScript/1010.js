// Cálculo simples

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

produto1 = lines.shift();
produto2 = lines.shift();

lista1 = produto1.split(" ");
lista2 = produto2.split(" ");

total =
  Number(lista1[1]) * Number(lista1[2]) + Number(lista2[1]) * Number(lista2[2]);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
