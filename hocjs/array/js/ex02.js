// console.log(Array.prototype);
// console.log([Array]);

// var user = ["An", "Sơn", "Dương"];
// Phương thức tĩnh trong Array
// 1. Kiểm tra 1 biến có phải là mảng hay không
// console.log(Array.isArray(user));
//  2 Array.from() --> Chuyển kiểu dữ liệu khác về mảng (ép kiểu)
// function test() {
//   //   var data = arguments;
//   var data = Array.from(arguments);
//   console.log(Array.isArray(data));
// }
// test(5, 10, 15, 20);

// Phương thức non-static --> Phụ thuộc vào đối tượng
// tenobject.tenphuongthuc()
var user = ["An", "Sơn", "Dương", "Sơn", "Hùng"];
// 3. length --> Lấy số lượng phần tử trong mảng
// console.log(user.length);
// 4. concat() --> Nối các mảng thành 1 mảng
// var newArr = user.concat(["a", "b", "c"], [1, 2, 3], [5, 6, 7]);
// console.log(newArr);
// var newArr = user.concat("Quân");
// console.log(newArr);
// 5. fill() --> Thay thế tất cả các phần tử mảng thành 1 giá trị
// var result = user.fill(1);
// console.log(user);
// console.log(result);

// 6. includes(0 --> Tìm một phần tử trong mảng theo value --. trả về true false)
// console.log(user.includes("Dương"));

// 7. indexOf() --> Tìm 1 phần tử trong mảng theo value --> trả về index
// console.log(user.indexOf("An"));

// 8. lastIndexOf() --> tìm 1 phần tử cuôi cùng của mảng theo value --> trả về index
// console.log(user.lastIndexOf("Sơn"));

// 9.join() --> Nối các phần tử trong mảng thành chuỗi
// console.log(user.join("."));
// 10. push() --> Thêm phần tử vào cuối mảng(Thay đổi mảng ban đầu)
// var count = user.push(["Tâm"], "Vân");
// console.log(user, count);
//  11. unshift() --> Thêm phần tử vào đầu mảng
// var count = user.unshift("Tâm", "Vân");
// console.log(user, count);
// 12 pop() --> Xoá phần tử cuối mảng
// var value = user.pop();
// console.log(user);
// console.log(value);
// 13. shift() --> Xoá phần tử đầu mảng
// var value = user.shift();
// console.log(user);
// console.log(value);
// 14. splice() --> Xoá phần tử tại index
// console.log(user);
// var value = user.splice(1, 2, "item1", "item2");
// console.log(user);
// console.log(value);
// 15. slice(start, end) --> CẮt mảng từ index đến end -1
// var newArr = user.slice(1, 3);
// var newArr = user.slice(-2);
// console.log(newArr);
// 16. keys() --> Lấy danh sách các key trả về 1 mảng
// var newArr = Array.from(user.keys());
// console.log(newArr);
// TIPS: Khởi tạo 1 mảng chứ 100 phần tử bắt đầu tử 0:0,1,2,3,...100
// var range = Array.from(Array(100).keys());
// console.log(range);
// TIPS 02: Lấy giới hạn số lượng phần tử trong mảng ban đầu
// var arr = ["A", "B", "C", "D", 1, 2, 3, 4, 5, 6];
// arr.length = 5;
// console.log(arr);

// 17.sort() --> Sắp xếp mảng theo thứ tự tăng dần
// user.sort();
// console.log(user);
// var number = [1, 100, 2, 5, 9];
// number.sort(function (a, b) {
//   // a: phần tử sau
//   // b: phần tử trước
//   // Nếu hàm trả về giá trị âm --> Đổi chỗ a,b
//   //   console.log(`a = ${a}, b = ${b}`);
//   if (b > a) {
//     return -1;
//   }
// });
// console.log(number);

var customers = [
  "Tạ Hoàng An",
  "Lưu Anh Quân",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
  "Nhật Dương",
];
// console.log(customers);
// Yêu cầu: Sắp xếp mảng customers theo thứ tự tăng dẫn  theo tên dùng sort()

function getFirstName(fullname) {
  return fullname.split(" ").slice(-1).join().toLowerCase();
}
// var a = getFirstName("Việt Hùng");
// console.log(a);
customers.sort(function (a, b) {
  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
});
console.log(customers);
// 18. reverse() --> Đảo ngược mảng
user.reverse();
console.log(user);
