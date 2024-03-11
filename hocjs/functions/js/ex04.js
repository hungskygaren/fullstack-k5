// Callback Function
/* 
var showStudentInfo = () => {
  console.log("show student 1");
};
var showStudentInfo2 = () => {
  console.log("show student 2");
};
var showStudents = () => {
  console.log("show students");
  showStudentInfo();
};
showStudents();
khong kế thừa được
*/
// var showStudentInfo = () => {
//   console.log("show student 1");
// };
// var showStudentInfo2 = () => {
//   console.log("show student 2");
// };
// var showStudents = (func) => {
//   console.log("show students");
//   func();
// };
// showStudents(showStudentInfo);
// showStudents(showStudentInfo2);
// showStudents(function () {
//   console.log("hoc js quá khó");
// });

// Hàm setTimeout(callback, time, arguments của hàm callback) --> Delay quá trình thực thi hàm callback
// var displayName = function () {
//   console.log("hoàng an f8");
// };
// setTimeout(displayName, 1000);

// var displayName = function (course) {
//   console.log("hoàng an f8");
//   console.log(course);
// };
// setTimeout(displayName, 1000, "khoá học f8");
// var handleDisplayName = function () {
//   displayName("Fullstack");
// };

// setTimeout(handleDisplayName, 1000);
// ----------------------------------------
// function getA() {
//   setTimeout(function () {
//     console.log("getA");
//   }, 2000);
// }
// function getB() {
//   setTimeout(function () {
//     console.log("getB");
//   }, 1000);
// }
// function getC() {
//   setTimeout(function () {
//     console.log("getC");
//   }, 500);
// }
// getA();
// getB();
// getC();

// trường hợp này chỉ chạy chứ không getA xong mới getB băt đầu chạy
// muốn vậy ta dùng call back cho B là con của A
// function getA(callback) {
//   setTimeout(function () {
//     console.log("getA");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 2000);
// }
// function getB(callback) {
//   setTimeout(function () {
//     console.log("getB");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// }
// function getC(callback) {
//   setTimeout(function () {
//     console.log("getC");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 500);
// }
// getA(function () {
//   getB(getC);
// });
// getA(function () {
//   getB(function () {
//     getC;
//   });
// });
// //---
// var handleGetB = function () {
//   var handleGetC = function () {
//     getA();
//   };
//   getC(handleGetC);
// };
// getB(handleGetB);
// //--
// getB(function () {
//   getC(getA);
// });
// arguments --> bind ra các đối số
function max() {
  //   console.log(arguments);
  function children() {
    console.log(arguments);
  }
  children();
}

max(5, 10, 15, 20, 25);

// lưu ý : không hỗ trợ trong Arrow function (ES6) --> cần sử dụng Rest Parameter
