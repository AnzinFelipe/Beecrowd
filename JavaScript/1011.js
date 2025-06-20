// Esfera

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let r = parseInt(lines.shift());

const pi = 3.14159;
let volume = (4 / 3) * pi * r ** 3;

console.log(`VOLUME = ${volume.toFixed(3)}`);
