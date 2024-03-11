var carousel = document.querySelector(".carousel");
var carouselImages = carousel.querySelector(".carousel-images");
var carouselNextBtn = carousel.querySelector(".carousel .carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel .carousel-nav .prev");
var carouselItems = carouselImages.children;
var dots = document.querySelectorAll(".dot");

// Tính kích thước chiều rộng của 1 item
var itemWidth = carouselImages.clientWidth;

// Tính tổng kích thước các item
var totalWidth = itemWidth * carouselItems.length;

// Cập nhật css cho carousel image
carouselImages.style.width = `${totalWidth}px`;

// Lắng nghe sự kiện click vào nút next btn
var translateX = 0;
var currentIndex = 0; // Track the current index of the active dot

carouselNextBtn.addEventListener("click", function () {
  if (Math.abs(translateX) >= totalWidth - itemWidth) {
    return; // thoát hàm
  }
  translateX -= itemWidth;
  currentIndex++;
  carouselImages.style.transform = `translateX(${translateX}px)`;
 
});

// Lắng nghe sự kiện click vào nút prev
carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(translateX) < itemWidth) {
    return; // thoát hàm ko chạy bên dưới
  }
  translateX += itemWidth;
  currentIndex--;
  carouselImages.style.transform = `translateX(${translateX}px)`;
  
});


dots.forEach(function(dot, index) {
  dot.addEventListener("click", function () {
   
    translateX = -index * itemWidth;

    
    carouselImages.style.transform = `translateX(${translateX}px)`;

   
    currentIndex = index;
    removeActiveClassFromDots();
    dot.classList.add("active");
  });
});


function removeActiveClassFromDots() {
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
}


function updateActiveDot() {
  removeActiveClassFromDots();
  dots[currentIndex].classList.add("active");
}
