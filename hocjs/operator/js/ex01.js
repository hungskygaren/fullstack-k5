/*
Biểu thức = Toán tử + Toán hạng
total = a+b+c;
1.Toán tử số học
+,-,*,/,%,**(luỹ thừa)
++,--

*/
// var a = 10;
// a--;
// --a;
// console.log(a);

// var count = 0;
// var total = 10 + ++count;
// console.log(total);
// var total = count++ + ++count;

// console.log(total);
// toán tử gán mở rộng
// +=
// -=
// +=
// /=
// %=
// */
// var a = 10;
// var b = a > 9;
// console.log(a);
// var a = "10" === 10;
// console.log(a);
/*
2. Toán tử logic
- Dùng để so sánh
- Chỉ trả về kiểu boolean (true, false)
>, <, >=, <=, ==, ===, !=, !==
*/

// var a = 10;
// //var b = a == "10"; //Chỉ so sánh giá trị
// var b = a === "10"; //So sánh giá trị và kiểu dữ liệu
// console.log(b);

/*
3. Toán tử gán (=)
*/
// var a = 20;
// a += 10; // a = a + 10;
// a -= 10; // a = a - 10
// a /= 10; // a = a / 10
// a *= 10; // a = a * 10
// a %= 3; // a = a % 3
// console.log(a);

// var title = "Hoàng An";
// title += " F8";
// title += " F8";
// title += " F8";
// title += " F8";
// console.log(title);

/*
// 4 Toán tử kết hợp
/*
-Và (&&) Chỉ đúng khi tất cả biểu thức con đúng
- Hoặc (||):chỉ sai khi tất cả biểu thức con sai
- phủ định (!):ngược lại
Lưu ý :khi sử dụng toán tử kết hợp cần sử dụng thêm cặp ngoặc tròn để nhóm các biểu thức

Nếu tồn tại cả 3 toán tử kết hợp trong 1 biểu thức, thứ tự ưu tiên sẽ như sau
! --> && --> ||
*/

// var a = 10;
// var b = (a > 10 && a < 20) || a > 5;
// console.log(b);

// 5.Toán tử 3 ngôi
// dieukien ? giatridung:giatrisai
// var a = 10;
// var b = a >= 10 ? "Hello F8" : "không tồn tại";
// console.log(b);

// var a = 10;
// var b = 10 + 5 + a >= 30 ? 20 : 5 + 10;
// console.log(b);

/*
6. Toán tử nullish (??)
result = bien ?? giatrimacdinh
Cách hoạt động:
-Kiểm tra biến có khác null và undefined hay không
+ Nếu có lấy gia trị trước ??
+ Nếu không lấy giá trị sau ??


*/

// var a;
// var b = a ?? "Không xác định";
// console.log(b);

// BÀi tập viết lại nulllish bằng 3 ngôi
// var a = null;
// var b = a !== null && a !== undefined ? a : "không xác đinh";
// console.log(b);

// 7.Truthy, Falsy
/*
Truthy: Khi đưa giá trị của các biến vào biểu thức logic --> Tự động ép kiểu về true
FAlsy : Khi đưa giá trị của các biến vào biểu thức logic --> Tự động ép kiểu về false
CÁC GIÁ trị Falsy
-null
-undefined
-"" chuỗi trống
- NaN Not a number
- false
- 0
--> Các trường hợp không phải FAlSY là Truthy

*/
// var a = 0;
// var b = a ? "Hello F8" : "Không xác định";
// console.log(b);

// 8. Toán tử && VÀ
/*
Nếu giá trị trước  && là truthy --> Lấy giá trị sau &&
Ngược lại, lấy giá trị trước &&
*/
var a = 10;
var b = a && null && "False 3";
console.log(b);
// 9. Toán tử ||
/*


*/
// var a = 0;
// var b = a || "" || "truethy3";
// console.log(b);
