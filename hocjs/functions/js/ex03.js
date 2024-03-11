// Closure: là hàm có thể truy cập vào các thuộc tính / biến của scope(phạm vi) chứa nó
/*
3 phạm vi hàm closure truy cập được 
-Biến cục bộ của chính nó
- Biến cục bộ của hàm cha
- biến toàn cục
lưu ý : Các hàm trong JS đều là hàm closure(hàm trong hàm)


*/

var a = 10;
function init(value = "F8") {
  console.log("init");
  var b = 20;
  function show() {
    var c = 30;
    console.log("show");
    console.log(`a = ${a}`);
    console.log(`value = ${value}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
  }
  //   show();
  //   return show;
}
init();

// function sum(a, b) {
//   return a + b;
// }
// var a = 20;
// var b = 10;
// console.log(sum(a, b));

function sum(a) {
  return function (b) {
    return a + b;
  };
}
var a = 20;
var add = sum(a);
var b = 10;
var c = 30;
console.log(add(40));
// console.log(add(c));

// Expression function
// var getMessage = function () {
//   console.log("hoc js ");
// };
// getMessage();

// IIFE
(function (msg) {
  console.log("hop lap trinh tai", msg);
})("F8");
