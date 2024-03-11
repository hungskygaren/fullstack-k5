/*
Mảng Array : 
- Kiểu dữ liệu tham chiếu
- Tập hợp nhiều giá trị trong 1 biến
- Mảng bản chất là object (là 1 dạng của object)
- 2 phần:
+ Element: Giá trị của 1 phần tử trong mảng 
+ index : Chỉ số để truy cập vào phần tử trong mảng(Bắt đầu tử số 0
    )
Có 2 loại mảng:
- Mảng 1 chiều 
- Mảng đa chiều   

Hàm tạo của mảng là: Array
*/
console.log(Array.prototype);
var users = ["Đặng Ngọc Sơn", "Đinh Việt Hùng", "Anh"];
console.log(users, typeof users);
// var customers = new Array();
// console.log(customers);
// Truy cập vào phần tử mảng: Xác định index
// console.log(users[2]);
// Thay đổi giá trị phần tử ---------
// users[0] = "sơn f4";
// console.log(users);
// console.log(users.length);
// Thêm phần tử mới vào cuối mảng
// users[users.length] = "Nguyễn Mạnh Huy";
// users[users.length] = "Nguyễn Mạnh Hùng";
// console.log(users);
// // Duyệt mảng
// for (var index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }
// // Duyệt mảng : for in
// for (var index in users) {
//   console.log(users[index]);
// }
// // Duyệt mảng: for of --> trả về element
// for (var user of users) {
//   console.log(user);
// }
/*
Vòng lặp for in sẽ lấy được cả index và key
*/
console.log(users);
// Xoá phần tử trong mảng
// var result = [];
// for (var index in users) {
//   if (index !== "2") {
//     result[index] = users[index];
//   }
// }
// console.log(result);
// var result = [];
// var count = 0;
// for (var index in users) {
//   if (index !== "2") {
//     result[count] = users[count];
//     count++;
//   }
// }
// console.log(result);
// BT 1 Chèn 1 phần tử vào đầu mảng
var first = "Huy";
var count = 0;
var newUsers = users;
for (var index in newUsers) {
  newUsers[0] = "Đổi";
  count++;
}
console.log(newUsers);

// ------
var newValue = "F8";
var result = [newValue];
for (var user of users) {
  result[result.length] = user;
}
console.log(result);
