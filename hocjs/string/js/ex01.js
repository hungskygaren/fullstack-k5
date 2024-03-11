// string: Kiểu dữ liệu nguyên thuỷ
/*
Trong JS : Kiểu dữ liệu nguyên thuỷ hoạt động giống Object (kiểu dữ liệu tham chiếu)--> Đối tượng chuỗi
*/
// var a = `F8`;
// console.log(typeof a);
// if (typeof a === `string`) {
//   console.log("đây là chuỗi ");
// } else {
//   console.log("Khôg");
// }

//Các cách khai báo chuỗi
// var a = "F8";
// console.log(a, typeof a, a.length); //trả về chuỗi nhưng vẫn có thể truy cập các phương thức của object js tự tạo 1 object tạm thời
// var b = String("F8");
// console.log(b, typeof b);
// var c = new String("F8"); // trả về object
// console.log(c, typeof c, c.length);
// ở trong js truy cập vào các thuộc tính ,
// phương thức của mọi object bằng dấu chấm (.)

// Hàm tạo của kiểu chuỗi(Hàm bọc kiểu dữ liệu nguyên thuỷ) --> Định nghĩa các phươg thức, thuộc tính
// Trong Js: Mỗi kiểu dữ liệu sẽ có 1 hàm tạo(Function Constructor): String, Number,Array,Object,Boolean,...
console.log(String.prototype);

// // 1. length --> Lấy độ dài của chuỗi
// var fullName = "Hoàng An F8 An F8";
// console.log(fullName.length);
// //  2. at() --> Lấy kí tự theo index/ Bắt đầu từ 0
// console.log(fullName.charAt(0));
// // 3. charCodeAt() --> Lấy mã ASCII ở ký tự theo index
// console.log(fullName.charCodeAt(0));
// // 4. concat() --> nối chuỗi
// console.log(fullName.concat("HTML", "CSSS"));
// console.log(fullName + "kamen");
// // 5. includes() --> Tìm chuỗi con trong chuỗi cha --> TRả về true , false
// console.log(fullName.includes("F8"));
// // 6. indexOf() --> tìm chuỗi con trong chuỗi cha --> trả về index đầu tiên tìm được (Không tìm thấy trả về -1)
// console.log(fullName.indexOf("F8"));
// // 7. lastIndexOf() --> tìm chuỗi con trong chuỗi cha --> trả về index cuối cùng tìm được (Không tìm thấy trả về -1)
// console.log(fullName.lastIndexOf("F8"));
// // 8. slice(start, end) --> Cắt chuỗi từ start đến trước end
/*
Nếu slice(5) --> lấy từ index = 5 đến hết chuỗi
- Nếu slice(-5) --> Lấy 5 kí tự cuối chuỗi
*/
// console.log(fullName.slice(0, 3));
// console.log(fullName.slice(3));
// console.log(fullName.slice(-3));
// // 9. replace --> Thay thế từ khoá đầu tiên tìm được
// console.log(fullName.replace("F8", "Google"));
// /* Hàm replace có hỗ trợ thay thế bằng biểu thức chính quy
// (regular Expression)--> Học sau */
// // 9. replace --> Thay thế tất cả từ khoá tìm được
// console.log(fullName.replace("F8", "Google"));
// // 10. replaceAll() --> Thay thế tất cả từ khoá tìm được
// console.log(fullName.replaceAll("F8", "Google"));
// // 11. split() --> Cắt chuỗi thành mảng dựa vào ký tự phân cách
// console.log(fullName.split(""));
// // 12.toUpperCase() --> Chuyển tất cả thành chữ HOA
// console.log(fullName.toUpperCase());
// // 13. toLowrerCase
// console.log(fullName.toLowerCase());
// // 14. trim() --> Cắt khoảng trắng đầu và đầu chuỗi
// console.log(fullName.trim());
// // 15. trimStart(), trimLeft() -->Cắt khoảng trắng đầu chuỗi
// // 16. trimEnd, trỉmight() --> Cắt khoảng trắng cuối chuỗi
// // 17. match() --> Cắt chuỗi bằng biểu thức chính quy
// var content = `Xin chào, 0123456789 F8 0147258369`;
// var phone = content.match(/0\d{9}/g);
// console.log(phone);

// Cho trước 1 email --> lấy username của email đó
// var email = `hoangan.web@gmail.com`;
// console.log(email.slice(0, 7));
// var position = email.indexOf("@");
// var username = email.slice(0, position);
// console.log(username);
// BT 2 kiem tra xem chuỗi có phải tất cả viết hoa không
// var fullName = ` TẠ HOÀNG AN`;
// var FULLNAME1 = fullName.toUpperCase();
// if (fullName === FULLNAME1) {
//   console.log("hợp lệ");
// } else {
//   console.log("không");
// }
// console.log(FULLNAME1);
//  BT3 Đảo chữ đầu và chữ cuối của 1 chuỗi
// output: An chào , tôi tên là Tạ Hoàng Xin
var str = "Xin chào, tôi tên là Tạ Hoàng An";
var strcuoi = str.lastIndexOf(" ");
var strdau = str.indexOf(" ");
var slice = str.slice(strdau, strcuoi);

worddau = str.slice(0, strdau);
wordcuoi = str.slice(strcuoi + 1);
console.log(worddau);
console.log(wordcuoi);
var output = wordcuoi + slice + worddau;
console.log(str.indexOf("Xin"));
console.log(output);
