var query = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  keyword: "F8",
};
/*
Chuyển object thành query params
--> name=Hoàng+An&email=hoangan.web@gmail.com&keyword=F8
*/
// var params = "";
// for (var key in query) {
//   console.log(key, query[key]);
//   var sub = `${key}=${query[key]}`;
//   params += `${sub}&`;
// }
// params = params.slice(0, params.length - 1);
// console.log(params);
var params = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("F8")
  .replaceAll(" ", "+");
//   Chaining
// console.log(params);
// Bài tập 2
var url = `https://fullstack.edu.vn/search/course?name=Hoàng+An&email=hoangan.web@gmail.com&keyword=F8`;
console.log(url);
/*
Yêu cầu : Tách từng thành phần của url
Protocol: https
Domain: fullstack.edu.vn
Path: search
Query: {
    name:Hoàng An;
    email:hoangan.web@gmai.com;
    keyword:F8;
}
*/
// 11. split() --> Cắt chuỗi thành mảng dựa vào ký tự phân cách
// console.log(fullName.split(""));
var urlsplit = url.split("?");
console.log(urlsplit);
var params2 = urlsplit[1];
console.log(params2);
params3 = params2.split("&");
console.log(params3);
var querys = params3.map(function (item) {
  var Arr = item.replaceAll("+", " ").split("=");
  return Arr;
});
console.log(querys);
// -------------- chữa
var urlArr = url.split("//");
var Protocol = urlArr[0].slice(0, -1);
var rest = urlArr[1];
var domain = rest.slice(0, rest.indexOf("/"));
var afterDomain = rest.slice(rest.indexOf("/"));
var pathname = afterDomain.slice(0, afterDomain.indexOf("?"));
var params = afterDomain.slice(afterDomain.indexOf("?") + 1);
var query = params.split("&").map(function (item) {
  var itemArr = item.replaceAll("+", " ").split("=");
  return itemArr;
});
query = Object.fromEntries(query);
console.log(urlArr);
console.log(Protocol);
console.log(domain);
console.log(pathname);
console.log(query);
