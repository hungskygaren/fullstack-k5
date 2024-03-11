/*
Event: các hành động từ phía người dùng tác động lên các thẻ html
- Mặc định JS có sẵn các sự kiện ở các thẻ html
- mỗi thẻ html có các sự kiện khác nhau
- sẽ có các sự kiện xuất hiện trong tất cả các thẻ html: click, dbclick, mouseover,
mouseout,mousemove,mouseleave,mousedown,mouseup
--> Việc của lập trình viên gán nội dung cho sự kiện
- Event Handler (onclick,ondbclick,on.....)
- Event Listener
*/

// var btn = document.querySelector(".btn");
// var handleClick = function () {
//   console.log("hellooooooo");
// };
// // btn.onclick = handleClick;
// btn.addEventListener("click", handleClick);

var removeBtn = document.querySelector(".remove-btn");
var formsearch = document.querySelector(".form-search");
var handleSubmit = function () {
  alert("ok");
};
formsearch.addEventListener("submit", handleSubmit);

removeBtn.addEventListener("click", function () {
  formsearch.removeEventListener("submit", handleSubmit);
});

// var handleSubmit = function () {
//   alert("aaaaaaaaaa");
// };
