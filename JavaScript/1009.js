// Salário com bônus

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

name = lines.shift();
salary = parseFloat(lines.shift());
sales = parseFloat(lines.shift());

total = salary + 0.15 * sales;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
