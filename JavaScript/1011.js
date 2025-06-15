// Esferas

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

r = parseInt(lines.shift());

pi = 3.14159;
volume = (4 / 3) * pi * r ** 3;

console.log(`VOLUME = ${volume.toFixed(3)}`);
