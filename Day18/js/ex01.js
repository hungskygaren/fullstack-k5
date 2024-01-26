// Bai 1
var km = 121;
var price = 0;

if (km <= 1) {
  price = 15000 * km;
  console.log(`Số tiên taxi là: ${price}`);
} else if (km > 1 && km <= 5) {
  price = 13500 * km;
  console.log(`Số tiên taxi là: ${price}`);
} else if (km > 5 && km <= 120) {
  price = 11000 * km;
  console.log(`Số tiên taxi là: ${price}`);
} else {
  price = (11000 * km * 9) / 10;
  console.log(`Số tiên taxi là: ${price}`);
}
