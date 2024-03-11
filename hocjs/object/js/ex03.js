Object.prototype.getMessage = function () {
  return "Hello F8";
};
Object.prototype.message = "Học lập trình ko khó";
String.prototype.getstring = "QWE";
var fullname = "a";
console.log(fullname.getstring);
var user = {
  name: "Hoàng An",
  company: "F8",
};
console.log(user.getMessage());
console.log(user.message);
var customer = {
  name: "Lưu Anh Quân",
  email: "quan@gmail.com",
  age: 25,
};
console.log(customer.getMessage());
console.log(customer);
console.log([Object]);
// -------------
/*
Bài tập:
*/
Object.prototype.combineValues = function () {
  var athis = this;
  console.log(athis);
  //   var query = params.split("&").map(function (item) {
  return Object.keys(this).map(function (key) {
    return athis[key];
  });
};
// console.log(this);
console.log(customer.combineValues());

function demo() {
  console.log(arguments);
}
demo(1);
