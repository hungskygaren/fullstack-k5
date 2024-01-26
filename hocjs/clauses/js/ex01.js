/*

Câu lệnh rẽ nhánh if else 
1.Dạng thiếu
if(dieukien){
    //code
}
2.dạng đầy đủ 
if(dieukien){
    //code true
} else {
    //code false
}
3.Dang nhiều nhánh 
IF(dieukien){
    //code1
} else if (dieukien){
    //code 2
}else if (dieukien){
    //code 3
}
else  (dieukien){
    //code 4
}
4.Dạng Lồng nhau
if (condition1){
    if (condition2){
        //code true
    } else {
    //code false
    }
}else {
    //code false
}
*/

// var number = 10;
// if (number) {
//   console.log("gia tri dung");
// } else {
//   console.log("gia tri sai");
// }
// document.write("<h1>xin chao</h1>");

/*
BT:

*/
// var tongluong = 10000;
// if (tongluong <= 5000) {
//   var tongluong1 = tongluong;
//   console.log(tongluong1);
// } else if (15000 >= tongluong && tongluong > 5000) {
//   var tongluongmid = (tongluong * 97) / 100;
//   console.log(tongluongmid);
// } else {
//   var tongluonglate = (tongluong * 95) / 100;
//   console.log(tongluonglate);
// }

var email = "ds";
var password = "";
if (email === "" || password === "") {
  if (email === "") {
    console.log("Vui lòng nhập email");
  } else {
    console.log("Vui long nhập mật khẩu");
  }
} else {
  console.log("Thành công");
}
