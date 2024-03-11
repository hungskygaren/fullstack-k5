var modal = document.querySelector(".modal");
var btn = document.querySelector(".btn");
var closeBtn = document.querySelector(".close-btn");
var overlay = modal.querySelector(".modal-overlay");
// btn.addEventListener("click", function () {
//   modal.classList.add("modalhien");
// });
var closemodal = function () {
  modal.classList.remove("modalhien");
};
var openModal = function () {
  modal.classList.add("modalhien");
};
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("modalhien");
// });
// overlay.addEventListener("click", function () {
//   modal.classList.remove("modalhien");
// });
btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);
setTimeout(closemodal, 5000);
