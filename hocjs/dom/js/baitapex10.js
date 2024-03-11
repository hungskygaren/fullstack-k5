var items = document.querySelectorAll(".menu a");
console.log(items);
items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var subMenu = item.nextElementSibling;
    console.log(subMenu);
    if (subMenu) {
      e.preventDefault();
      var subMenuACtive = document.querySelector(".menu ul.open");
      subMenu.classList.toggle("open");
      if (subMenuACtive && subMenuACtive.classList.contains("open")) {
        subMenuACtive.classList.remove("open");
      }
    }
  });
});
