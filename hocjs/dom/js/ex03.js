// DOM HTML: thao tác với thẻ html
/*
- Lấy nội dung của thẻ html
- Thay đổi nội dung của thẻ html
- Xoá thẻ html
- Thêm , sửa , xoá thuộc tính
1. element.innerText 
lấy nội dung của thẻ html(chỉ lấy text)

2. element.innerHTML 
lấy nội dung của thẻ html(bao gồm thẻ html)

3. element.textContent 
lấy nội dung html(chỉ lấy text, giữ khoảng cách gốc)

4. element.outerHTML
lấy nội dung thẻ html (bao gồm cả html bên trong và chính nó)

5. element.outerText 
 Lưu ý: nếu muốn cập nhật lại các nội dung các thẻ html --> Dùng 5 thuộc tính trên và gán giá trị
Lưu ý: Nếu muốn cập nhật lại nội dung các thẻ html -->Dùng 4 thuộc tính trên và gán giá trị
*/

// var btn = document.querySelector(".btn");
// var title = document.querySelector(".title");
// btn.addEventListener("click", function () {
//   // console.log(title.outerHTML);
//   // title.innerText = "Helloo";
//   title.textContent = "<span>aloooo</span>";
// });

var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var A = content.innerText;
btn.addEventListener("click", function () {
  // content.innerText = "";
  // btn.innerText = "Hiện";
  if (btn.innerText === "Ẩn") {
    content.innerText = "";
    btn.innerText = "Hiện";
  } else {
    content.innerText = A;
    btn.innerText = "Ẩn";
  }
});

var removeBtn = document.querySelector(".remove-btn");
removeBtn.addEventListener("click", function () {
  content.remove();
});
