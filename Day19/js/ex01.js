var n1 = 0;
var n2 = 1;
var result = 0;
function getFibonacci(n) {
  if (n > 2) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
    console.log(result);
    getFibonacci(n - 1);
  }
}
console.log(n1);
console.log(n2);
getFibonacci(10);
