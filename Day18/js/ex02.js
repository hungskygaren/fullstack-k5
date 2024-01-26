var price = 0;
var electricNumber = 501;
var lev1 = 1678;
var lev2 = 1734;
var lev3 = 2014;
var lev4 = 2536;
var lev5 = 2834;
var lev6 = 2927;
var a = 0;
if (electricNumber <= 0) {
  console.log("Vui lòng nhập số diện lớn hơn 0");
} else if (electricNumber > 0 && electricNumber < 50) {
  a = 1;
} else if (electricNumber > 50 && electricNumber < 101) {
  a = 2;
} else if (electricNumber > 100 && electricNumber < 201) {
  a = 3;
} else if (electricNumber > 200 && electricNumber < 301) {
  a = 4;
} else if (electricNumber > 300 && electricNumber < 401) {
  a = 5;
} else if (electricNumber > 401) {
  a = 6;
}

switch (a) {
  case 1:
    price = lev1 * electricNumber;
    console.log(`Số tiền bạn phải trả là ${price}`);
  case 2:
    price = 50 * lev1 + (electricNumber - 50) * lev2;
    console.log(`Số tiền bạn phải trả là ${price}`);
  case 3:
    price = 50 * lev1 + 50 * lev2 + (electricNumber - 100) * lev3;
    console.log(`Số tiền bạn phải trả là ${price}`);
  case 4:
    price = 50 * lev1 + 50 * lev2 + 100 * lev3 + (electricNumber - 200) * lev4;
    console.log(`Số tiền bạn phải trả là ${price}`);
  case 5:
    price =
      50 * lev1 +
      50 * lev2 +
      100 * lev3 +
      100 * lev4 +
      (electricNumber - 300) * lev5;
    console.log(`Số tiền bạn phải trả là ${price}`);
  case 6:
    price =
      50 * lev1 +
      50 * lev2 +
      100 * lev3 +
      100 * lev4 +
      100 * lev5 +
      (electricNumber - 400) * lev6;
    console.log(`Số tiền bạn phải trả là ${price}`);
  default:
}
