var btn = document.querySelector(".btn");
var h1 = document.querySelector("h1");
console.log(h1.classList);
// btn.addEventListener("click", function () {
//   //   h1.className = h1.className + " abc";
//   //   h1.classList.add("abc", "xyz");
//   //   h1.classList.replace("title1", "qwe");
//   //   h1.classList.remove("title1", "title2");
//   //   console.log(h1.classList.contains("title1"));// kiem tra tồn tại
//   h1.classList.toggle("abc"); // toggle là chưa có thì thêm có rồi thì xoá
// });
var content2 = document.querySelector(".content2");
btn.addEventListener("click", function () {
  content2.style = "display:block";
});
