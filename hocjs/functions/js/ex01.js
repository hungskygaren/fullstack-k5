/*
Hàm(function) 
-- Là cú pháp trong lập trình
-- Tách các đoạn chương trình để tái sử dụng

Cú pháp
function tenham(){
    //noi dung ham
}
function tenham (thamso1,thamso2,..){
    // noi dung ham
}
--> Declaration function

Quy tắc đặt tên hàm:
- Dùng quy tắc  camelCase
- Dùng động từ (Bắt đầu: get,set,create,make,build,...)
*/
/* 
console.log("Đoạn chương trình 1");
var a = 10;
var b = 20;
var total = a + b;
console.log(total);
console.log("Đoạn chương trình 2");
var a = 15;
var b = 25;
var total = a + b;
console.log(total);
// --> bị lặp total = a + b
*/
// Định nghĩa hàm
function showMessage(msg, type) {
  // msg gọi là tham số

  console.log(msg);
  console.log(type);
}
// Gọi hàm
showMessage(true, "đối số type");
console.log(showMessage(5, 6)); // lời gọi hàm chủ động gọi và đưa () vào
// gọi hàm bị động là gọi kiểu call back không có ()
// Khi định nghĩa hàm --> Tham số ví dụ msg
// Truyền giá trị vào tham số khi gọi hàm --> Đối số ví dụ "Học js quá khó"
