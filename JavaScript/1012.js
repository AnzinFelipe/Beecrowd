// Áreas

let nomes = ["TRIANGULO", "CIRCULO", "TRAPEZIO", "QUADRADO", "RETANGULO"];

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let valor = lines.shift().split(" ");

let a = parseFloat(valor[0]);
let b = parseFloat(valor[1]);
let c = parseFloat(valor[2]);

let triangulo = (c * a) / 2;
const pi = 3.14159;
let circulo = pi * c ** 2;
let trapezio = ((a + b) * c) / 2;
let quadrado = b ** 2;
let retangulo = a * b;

let valores = [triangulo, circulo, trapezio, quadrado, retangulo];

for (let i = 0; i < 5; i++) {
  console.log(`${nomes[i]}: ${valores[i].toFixed(3)}`);
}
