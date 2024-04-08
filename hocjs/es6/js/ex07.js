// Làm sao js chạy đc ?
/*
javascript engine(chorme v8)
javascript Runtime: môi trường chạy được javascript
- Browser API (web APIs) --> trình duyệt(xây dựng sẵn các hàm: setTimeout,setInterval,alert, prompt, fetch, ...)
- Node
Cụ thể:
 - Nếu JS chạy trên trình duyệt: Web APIS(các hàm của trình duyệt setTimeout,...) bọc v8
 - Nếu JS chạy trên server: C++(trên node là các hàm của c++) bọc v8

 Js là single-thread (đơn luồng): Tại một thời điểm chỉ chạy được một tác vụ
 Cấu tạo của JS Engine
 - HEAP : bộ nhớ
 - call stack : nơi chứa các tác vụ cần gọi (tại 1 thời điểm chỉ có 1 tác vụ)

Bất đông bộ(asynchronous): các hàm được xây dựng bởi javascript runtime
- setTimeout()
- setInterval()
- fetch()
- event: click, mouseup,mousedown,...
Đặc điểm chung: đều có callback 
*/
// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4);

// setTimeout(() => {
//   console.log("0");
// }, 0);
// console.log("1");

// Xử lý bất động bộ
/*
Công việc: cho thành đồng bộ
1.Callback
2.Promise
3.Async Await
*/
// const getUser = () => {
//   setTimeout((callback) => {
//     console.log("User Data");
//     typeof callback === "function" && callback();
//   }, 1000);
// };
// const showMessage = () => {
//   console.log("hiển thị thành công");
// };

// getUser(() => {
//   showMessage();
// });
/*
Giải pháp: chuyển dữ liệu từ dạng nested callback --> chaining
method1().method2().method3();
*/
// Promise: object đặc biệt dùng để xử lý các tác vụ bất đông bộ
/*
3 trạng thái
 - pending chờ kết quả đang trả về 
 - fulfilled kết quả trả về thành công
 - rejected kết quả trả về thất bại

*/

// const myPromise = new Promise((resolve, reject) => {
//   // resolve: hàm để trả về dữ liệu thành công
//   // reject: hàm có thể trả về dữ liệu thất bại
//   // Lưu ý: Việc thành công hay thất bại là do logic nghiệp vụ của mình, còn promise chỉ có tác dụng là trả về
//   setTimeout(() => {
//     reject("error");
//     resolve("user data");
//     // chỉ chạy reject hoặc resolve cái trên chạy rồi thì cái dưới thôi ở đây reject chạy rồi thì resolve thôi
//   }, 2000);
// });
// Đọc dữ liệu của promise
// myPromise
//   .then((data) => {
//     console.log(data); // ---> then dùng để đọc resolve
//   })
//   .catch((error) => {
//     console.log(error); // ---> catch dùng để đọc reject
//   })
//   .finally(() => {
//     console.log("xong rồi"); // thứ tự đọc then -> catch -> finally ,finally lỗi hay ko lỗi đều đọc hết
//     // ví dụ sau khi thanh toán trong thẻ pop up dù thành công hay thất bại đều đóng pop up thì ta dùng finally đỡ bị trùng phải viết 2 lần
//   });

// const getUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("get user data");
//     }, 0);
//   });
// };
// const displayUser = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Display User");
//   });
// };
// const showMessage = () => {
//   console.log("show message");
// };
// // getUser().then(users) => {
// //     console.log(users);

// // }
// getUser()
//   .then((users) => {
//     console.log(users);
//     return showMessage();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong promise1");
//   })
//   .then((message) => {
//     console.log(message);
//     return displayUser();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong promise2");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong promise3");
//   });

// --------
const users = [
  {
    id: 1,
    name: "user 1",
    salary: 5000,
  },
  {
    id: 2,
    name: "user 1",
    salary: 6000,
  },
  {
    id: 3,
    name: "user 1",
    salary: 7000,
  },
  {
    id: 4,
    name: "user 1",
    salary: 8000,
  },
];
const getUsers = (userId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(({ id }) => id === userId);
      resolve(user);
    }, 1000);
  });
const arr = [1, 3, 4];
for (let i = 0; i < arr.length; i++) {
  getUsers(arr[i]).then((data) => {
    console.log(data);
  });
}
// Yêu cầu : tính tổng thua nhập các user trong mảng arr
// Không dùng : async,await. Promise.all
// let total = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   getUsers(arr[i]).then((data) => {
//     total = total + data.salary;
//     count = count + 1;
//     console.log(count, total);
//     if (count === arr.length) {
//       console.log(total);
//     }
//   });
// }
// const userId = arr[i];
// const userPromise = getUsers(userId);
// const getSalary = () => {
//   // Trả về 1 promise chứa tổng tiền
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const userId = arr[i];
//     getUsers(userId).then((salary) => {
//       total += salary;
//       if (i === arr.length - 1) {
//         return new Promise((resolve) => resolve(total));
//       }
//     });
//     if (i === arr.length - 1) {
//       return userPromise;
//     }
//   }
// };
// getSalary().then((total) => {
//   console.log(total);
// });

// Ví dụ: gửi email hàng loạt. lấy danh sách users github...
// Bài toán:Xử lý nhiều promise cùng 1 lúc
// --> giải pháp:Promise.all()
/*
promise.all(): Triển khai qua 2 bước 
- Bước 1: Tạo 1 mảng chứa tất cả các promise cần resolve
- Bước 2 : Đưa mảng chứa các promise vào promise.all() để xử lý
*/
// const promises = arr.map((userId) => getUsers(userId));

// Promise.all(promises).then((users) => {
//     console.log(users);
//     const result = users.reduce((total) =>{salary}){
//         return total + salary;
//     },0);
//     console.log(result);
// });

Promise.all(arr.map((userId) => getUsers(userId))).then((users) => {
  const result = users.reduce((total, user) => {
    return total + user.salary;
  }, 0);
  console.log(result);
});
