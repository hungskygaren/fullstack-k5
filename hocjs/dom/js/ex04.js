// Thuộc tính
/*
1.Thuộc tính có sẵn
element.tenthuoctinh --> Lấy giá trị
element.tenthuoctinh = gia tri --> Gán giá trị hoặc thêm thuộc tính mới


2. Thuộc tính tự tạo
- Giải quyết các bài toán sử dụng js
- Không có tác dụng thay đổi giao diện html khi chưa có sự tác động của js
- Bắt đầu: data-

Để đọc nội dung atrribute: element.getAttribute(tenthuoctinh)

Để thay đổi hoặc thêm mới: element.setAtrribute(tenthuoctinh, giatrithuoctinh)

Lưu ý: Hàm getAttribute, setAttribute áp dụng cho mọi thuộc tính 
(Bao gồm cả thuộc tính có sẵn)
*/
// var title = document.querySelector(".title");
// console.log(title.id);
// console.log(title.className);
// console.log(title.title);
// console.log(title.align);
// console.log([title]);
// // console.log(title.href);
// title.align = "center";

// title.className = "hello";
var title = document.querySelector(".title");
// console.log(title.getAttribute("data-color"));
// title.setAttribute("data-index", "ahihi");
// var color = title.getAttribute("data-color");
// title.style = `color: ${color}`;

// ----- Dataset
console.log(title.dataset.color);
console.log(title.dataset.animationDuration); // tự chuyển animationDuration thành animal-duration
title.dataset.animationTimmingFunction = "linear";
// Xoá thuộc tính
// title.removeAttribute("data-color");
// delete title.dataset.color;
delete title.id;
