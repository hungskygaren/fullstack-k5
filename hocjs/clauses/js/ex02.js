// Câu lệnh rẽ nhánh Switch Case
var action = "update";
// switch (action) {
//   case "create":
//   case "add":
//   case "insert":
//     console.log("thêm mới");
//     break;
//   case "update":
//   case "edit":
//     console.log("Cập nhậta");

//     break;
//   case "delete":
//     console.log("xoá");
//     break;
//   case "create":
//     console.log("thêm mới");
//     break;
//   default:
//     console.log("không tồn tại");
//     break;
// }
// Bài tập chuyển đoạn code trê thành dạng if else
// if (action === "create" || action === "add" || action === "insert") {
//   console.log("thêm mới");
// } else if (action === "update" || action === "edit") {
//   console.log("Cập nhật");
// } else if (action === "show" || action === "view") {
//   console.log("hiển thị");
// } else if (action === "delete" || action === "destroy" || action === "remove") {
//   console.log("Xoá");
// } else {
//   console.log("khong ton tai");
// }
// Hiển thị số ngày trong tháng
/*
Tháng 31 ngày: 1,3,5,7,8,10,12
tháng 30 :4,6,9,11
tháng 29 hoặc 28 : 2
Yêu cầu : kiểm tra tháng hợp lệ và hiển thị số ngày trong tháng đó
- Số nguyên --> Không được dùng hàm (chia hết cho 1 )
- Từ 1-12
*/

var month = "6";
var month = month * 1;
// var a = month / 5;
// console.log(a);
if (month % 1 === 0 && month >= 1 && month <= 12) {
  switch (month) {
    case 2:
      console.log("Tháng 2");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(`Tháng ${month} có 30 ngày `);
      break;
    default:
      console.log(`Tháng ${month} có 31 ngày`);
  }
} else {
  console.log("tháng không hợp lệ");
}
