var n = 10;
var check = true;
if (n % 1 !== 0 || n <= 1) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
}
console.log(`${n} nguyên tố là ${check}`);
