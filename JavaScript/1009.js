// Salário com bônus

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let name = lines.shift();
let salary = parseFloat(lines.shift());
let sales = parseFloat(lines.shift());

let total = salary + 0.15 * sales;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
