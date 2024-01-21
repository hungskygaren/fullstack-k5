// Bai 1
var a = 0;
var b = 1;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

// Bai 2
let s = 10 + 20 + 5 ** 10 / 2;
console.log(s);

// Bai 3
let a = 15;
let b = 18;
let c = 25;

let maxNumber = a;

if (b > maxNumber) {
  maxNumber = b;
}

if (c > maxNumber) {
  maxNumber = c;
}

console.log("Số lớn nhất là: " + maxNumber);

// Bai 4
let a = 5;
let b = 3;

if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
  console.log("Hai số cùng dấu.");
} else {
  console.log("Hai số khác dấu.");
}

// Bai 5
let a = 14;
let b = 6;
let c = 12;
let tam = 0;
if (a > b) {
  tam = a;
  a = b;
  b = tam;
}
if (b > c) {
  tam = b;
  b = c;
  c = tam;
}
if (a > b) {
  tam = a;
  a = b;
  b = tam;
}
console.log(`Thứ tự tăng dần là ${a}  ${b} ${c}`);
