/*
Vòng lặp:
-Cú pháp trong lập trình
-Lặp đi lặp lại 1 đoạn chương trình để giải quyết bài toán
2 loại:
- Biết trước số lần lặp:for
- không biết trước: while, do while
1.Vòng lặp for 
for (gia_tri_khoi_tao; dieu_kien_dừng; buoc_nhay){

}

*/
// for (var i = 0; i < 10; i++) {
//   console.log(`Hello: ${i}`);
// }
// for (var i = 10; i > 0; i--) {
// //scope
//     console.log(`Hello: ${i}`);
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(`i= ${i} - j = ${j}`);
//   }
// }

/*
BT 1
S= 1+2+3+...+N

*/
// var n = 10;
// var total = 0;
// for (var i = 1; i <= n; i++) {
//   //   total = total + i;
//   total += i;
// }
// console.log(`Tổng ${total}`);
/**
 BT2 Tinhs trung binh cong cac so chan tu 1 den N
 * 
 */
// var n = 10;
// var avg;
// var count = 0;
// var total = 0;
// for (i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     total += i;
//     count++;
//   }
// }
// avg = total / count;
// console.log(`Trung bình cộng : ${avg}`);
/*
BT3 Tính giá trị biểu thức 
total = 1 + 1*2 +  1*2*3 + 1*2*3*...*N
ví dụ 
N=3;
1+1*2+1*2*3

*/
// var n = 5;
// var total = 0;
// var subtotal = 1;
// for (i = 1; i <= n; i++) {
//   subtotal = subtotal * i;
//   console.log(`subtotal ${subtotal}`);
//   /*
//   i=1  s=1*1
//   i=2  s= 1*2
//   i = 3 s=(1*2)*3
//   i = 4 s=(1*2*3)*4
//   */
//   total += subtotal;
// }
// console.log(`ket qua ${total}`);
/**
 *BT4 kiem tra số n có phải số nguyên tố
 -số nguyên 
 - > 1
 - CHỈ chia hết cho 1 và chính nó
 * 
 */
var n = 10;
var isPrime = true; // Giả định n là số nguyên tố
if (n % 1 !== 0 || n <= 1) {
  isPrime = false;
} else {
  //chay  vong lặp từ 2 đến n nếu chia hết cho bất kì một số nào nữa thì ko phải là số ngto
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break; // Thoát vòng lặp khi vòng lặp chưa chạy xong
    }
  }
}
console.log(`${n} là ${isPrime}`);
if (isPrime) {
  console.log(`${n} là số ngto`);
} else {
  console.log(`${n} không là số ngto`);
} // --> Kỹ thuật cắm cờ true false
