// Salário

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let num = parseInt(lines.shift());
let hora = parseInt(lines.shift());
let valor = parseFloat(lines.shift());

let salario = valor * hora;

console.log("NUMBER = " + num);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
