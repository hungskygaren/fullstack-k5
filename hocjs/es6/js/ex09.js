// const myPromise = Promise.reject("error");
// const getData = async () => {
//   try {
//     const data = await myPromise;
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };
// // Xử lý DOM
// getData();
/*
THứ tự chạy try catch
- Chạy code ở trong try block
*/
// cách bắt lỗi khi dùng async await
// console.log("1");
// try {
// //   getA();
// // const a

// } catch (e) {
//   //   e = exception;
//   //   console.log(e);
//   if (e.message.includes("not defined")) {
//     console.log("có lỗi xảy ra:", e.message);
//   } else {
//     console.log(e);
//   }
// } finally {
//   console.log("đã xong");
// }

// const callUser = () =>
//   new Promise((resolve, reject) => {
//     resolve("user data");
//   });
// const getUser = async () => {
//   const user = await callUser();
//   return user;
// };
// /*
// Nếu return không có await --> trả về y nguyên promise ban đầu --> dễ dàng bắt lỗi ở ngoài
// nếu return có await --> resolve data sau đó trả về promise --> khó bắt lỗi ở ngoài

// */
// getUser().then((data) => {
//   console.log(data);
// });

const users = ["item1", "item2", "item3"];
const getUserByIndex = (index) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((item, _index) => _index === index);
      resolve(user);
    }, 1000);
  });
const array = [0, 2]; // yêu cầu trả về các user có index trong mảng array
(async () => {
  let output = "";
  //   array.forEach(async (item) => {
  //     const user = await getUserByIndex(item);
  //     console.log(user);
  //     output += user + "";
  //   for (let item of array) {
  //     const user = await getUserByIndex(item);
  //     console.log(user);
  //     output += user + "";
  //   }
  const userResolve = await Promise.all(
    array.map((item) => getUserByIndex(item))
  );
  output = userResolve.join("");
  console.log(output);
})();
