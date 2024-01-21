// Biến trong js

/*
-Lưu trữ dữ liệu tạm thời
-Biến có thể đặt tên
-Biến không cần khai báo kiểu dữ liệu(Trong JS)
- Các quy tắc đặt tên trong lập trình(biến,hàm ,lớp)
1. camelCase
customerId, customerAddressShipping
Đặt tên biến ,tên hàm

2.PascalCase
UserInvoice, UserCourse, CustomerController,...
Đặt tên Class , Component trong các Framework

3.underscore
custommer_id, user_id, custommer_shipping_adress
đặt tên trong database, api response
Kiểu dữ liệu nguyễn thuỷ
-number
-null
-undefined
-boolean:true, false
Kiểu dữ liệu tham chiếu
-Object
-function
 */

var age = 31; //Number
var fullname = "Hoàng An"; //String
var check = true; //Boolean
var address; // undefined
var lastName = null; //Null

// Kỹ thuật nối chuỗi
var courseName = "Fullstack Offline \n ";
var courseName = courseName + "Hoàng An";
// var welcome = "Chào mừng bạn đến với khoá " + courseName + " tại F8";
var welcome = `Chào mừng bạn đến với khoá ${courseName} tại F8`; // template string. ` gọi là Backtick
console.log(welcome);
console.log(courseName);
// Kiểm tra kiểu dữ liệu của một biến
console.log(lastName === null);
console.log(typeof age);
console.log(typeof lastName);
