/*
Hàm có giá trị trả về (Hàm return)
--> Để trả về giá trị cho 1 hàm -->dùng từ khoá return
- Khi dùng return -> hàm sẽ thoát (các đoạn chương trình sau return không hoạt động)
Hàm không có giá trị trả về (Hàm void)


Biến toàn cục (Global variabe): là biến được khai báo ở phạm vi ngoài hàm
+ có thể sử dụng ở mọi nơi



Biến cục bộ (Local variable): là biến được khai báo ở phạm vi ngoài hàm
+ chỉ sử dụng ở trong hàm đã được khai báo hoặc các hàm con
Lưu ý Trong JS không có khái niệm tham trị tham chiếu
*/
function sum(a, b) {
  var total = a + b;
  //   console.log(total);

  return total;
}
console.log(sum(10, 20));
var result = sum(10, 20) + 30;

// function division(a, b) {
//   if (b === 0) {
//     return "không tính được";
//   }
//   return a / b;
// }
// console.log(division(10, 5));

var message = "học js không khó";
function getMessage() {
  return message;
}
function setMessage(value) {
  message = value;
}
setMessage("hoang an f8");
console.log(getMessage());
// Từ khoá Closures
console.log(window);
confirm();
