// DOM navigation
/*
Element
- parentElement --> chọn cấp cha
- children --> chọn cấp con
- nextSiblingElement --> Chọn element tiếp theo(bên phải)
- previousSiblingElement --> Chọn element phía trước (bên trái)
- firstElementChild --> Chọn element đầu tiên
- lastElementChild --> Chọn element cuối cùng
Node
- parentNode --> Chọn node cha
- childNodes --> Chọn node con
- nextSibling --> Chọn node tiếp theo
- previousSibling --> Chọn node phía trước
- firstChild --> chọn node đầu tiên
- lastChild --> chọn node cuối cùng
*/
// var menuE1 = document.querySelector(".menu");
// // var items = menuE1.children[1].children[1].children[1].children[0].innerText;
// // console.log(items);

var items = document.querySelectorAll(".menu a");

items.forEach(function (item) {
  var subMenu = item.nextElementSibling;
  console.log(subMenu);
  if (subMenu) {
    item.parentElement.classList.add("has-children");
  }
});
