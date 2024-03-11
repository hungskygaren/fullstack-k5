// Function Constructor
/*
Tên hàm:
- Danh từ
- Sử dụng quy tắc PascalCase:User,UserController... 
*/
function User(name, email) {
  // Định nghĩa thuộc tính
  this.name = name;
  this.email = email;
  //   Định nghĩa phương thức
  this.showInfo = function () {
    return `${this.name} - ${this.email}`;
  };
}
User.prototype.message = "Hello F8"; // non static
User.prototype.getName = function () {
  // This ở trong phương thức thông thường(non-static) ->Object
  return this.name;
};
// Static method,static property Phưpng thức tĩnh
User.email = "hoangan.w ";
User.getEmail = function () {
  // this ở trong static -> trả về nội dung hàm tạo
  var user = new this();
  console.log(user.message);
  return "hoangan.web@gmail.com";
};

// Khởi tạo đối tượng từ hàm tạo
// var user = new User("Hoàng An", "fsf@gmail.com");
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.showInfo());
/**
 Xây dựng hàm tạo : Calculator
 Viết các phương thức để tính toán 
 - cộng 
 - trừ 
 - nhân
 - chia
 */
function Calculator() {
  Calculator.prototype.cong = function (a, b) {
    return a + b;
  };
  Calculator.prototype.tru = function (a, b) {
    return a - b;
  };
  Calculator.prototype.nhan = function (a, b) {
    return a * b;
  };
  Calculator.prototype.chia = function (a, b) {
    if (+b === 0) {
      // Error exception
      throw new Error("Không được chia cho số 0");
    }
    return a / b;
  };
}
var Cal = new Calculator();
console.log(Cal.cong(10, 20));
console.log(Cal.tru(10, 20));
console.log(Cal.nhan(10, 20));
console.log(Cal.chia(10, 10));

// Kiểm tra 1 object được tạo từ hàm tạo nào
console.log(Cal.constructor.name);
console.log(Cal instanceof Calculator);
if (Cal.constructor.name === "Calculator") {
  console.log("Tạo từ hàm Calculator");
} 
