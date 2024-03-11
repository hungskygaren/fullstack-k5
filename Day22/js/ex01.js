var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var giaonhau = arrA.filter(function (element) {
  return arrB.includes(element);
});

console.log(giaonhau);
