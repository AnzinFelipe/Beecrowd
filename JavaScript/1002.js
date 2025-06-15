// Área do círculo

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const pi = 3.14159;
let r = parseFloat(lines.shift());

let a = pi * r * r;

console.log(`A=${a.toFixed(4)}`);
