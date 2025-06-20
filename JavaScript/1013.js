// O maior

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let valor = lines.shift().split(" ");

let a = parseInt(valor[0]);
let b = parseInt(valor[1]);
let c = parseInt(valor[2]);

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${parseInt(maiorABC)} eh o maior`);
