document.addEventListener("DOMContentLoaded", function () {
  var logoLink = document.querySelector(".logo-link");
  var logoImage = document.getElementById("logo");

  // Xử lý sự kiện khi click vào logo-link
  logoLink.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

    // Thay đổi thuộc tính src của hình ảnh thành giá trị rỗng
    logoImage.src = "";
  });
});
