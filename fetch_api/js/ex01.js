/*
Trong JS làm sao để gọi API?
- Thư viện: axios, jquery ajax,...
- Hàm có sẵn: XmlHttpRequest, fetch (*)
*/
import { debounce } from "./utils.js";
//Hàm fetch(url, options)
/*
url: URL của API
options: Object để thiết lập HTTP Request
Hàm fetch trả về 1 promise
*/

const userApi = `http://localhost:3000/users`;
// fetch(userApi)
//   .then((response) => {
//     //Đọc dữ liệu từ api
//     //   response.text().then((data) => {
//     //     console.log(data);
//     //     const users = JSON.parse(data);
//     //     console.log(users);
//     //   });
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   });
const search = document.querySelector(".search");
const root = document.querySelector("#root");
const form = document.querySelector(".form-add");
const pagination = document.querySelector(".pagination");
// phân trang
const renderPaginate = (totalUser) => {
  console.log(totalUser);

  const totalPages = Math.ceil(totalUser / 3);

  console.log(totalPages);
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  let html = "";
  for (let page = 1; page <= totalPages; page++) {
    html += ` <a href="#" class="page" style="${
      page === query._page ? "color : red; font-weaight:bold ;" : ""
    }">${page}</a>`;
  }
  pagination.innerHTML = `${
    query._page > 1 ? '<a class="prev">Trước</a>' : ""
  }${html}${query._page < totalPages ? '<a class="next">Sau</a>' : ""}`;
};
pagination.addEventListener("click", (e) => {
  if (e.target.classList.contains("page")) {
    const page = e.target.innerText;
    query._page = page;
    showUser();
    console.log(page);
  } else if (e.target.classList.contains("prev")) {
    if (query._page > 1) {
      query._page--;
      showUser();
    }
  } else if (e.target.classList.contains("next")) {
    const totalPages = Math.ceil(totalUser / 3);
    if (query._page < totalPages) {
      query._page++;
      showUser();
    }
  }
});
const render = (users) => {
  root.innerHTML = `<div class="users">
    <h2>Danh sách người dùng</h2>${users
      .map(
        ({ id, name }) => `
      <div class="user-item">
        <p>Tên: ${name}</p>
        <button data-id="${id}" data-type="detail">Chi tiết</button>
        <button data-id="${id}" data-type="delete">Xóa</button>
        <button data-id="${id}" data-type="update">Sửa</button>
      </div>`
      )
      .join("")}
  </div>`;

  root.querySelector(".users").addEventListener("click", (e) => {
    if (e.target.dataset.type === "detail" && e.target.dataset.id) {
      const userId = e.target.dataset.id;
      showDetailUser(userId);
    }
    if (e.target.dataset.type === "delete" && e.target.dataset.id) {
      if (confirm("Bạn có chắc chắn?")) {
        const userId = e.target.dataset.id;
        deleteUser(userId);
      }
    }

    if (e.target.dataset.type === "update" && e.target.dataset.id) {
      const userId = e.target.dataset.id;
      updateUser(userId);
    }
  });
};
const renderUser = ({ name, email }) => {
  root.innerHTML = `<div class="users">
   <h2>Chi tiết người dùng</h2>
   <p>Tên: ${name}</p>
   <p>Email: ${email}</p>
   <button onclick="showUser()">Quay lại</button>
   </div>
   `;
};
const deleteUser = async (id) => {
  const response = await fetch(userApi + `/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    showUser();
  }
};
const showFormUpdate = async (id) => {
  const response = await fetch(userApi + `/${id}`);
  if (response.ok) {
    const data = await response.json();
    const nameE1 = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    nameE1.value = data.name;
    email.value = data.email;
    const btnE1 = form.querySelector("button");
    btnE1.innerHTML = `Cập nhật`;
    form.dataset.id = id;
    // console.log(form.dataset.id);
  } else {
    alert("Không tìm thấy người dùng");
  }
};
const updateUser = async (id) => {
  showFormUpdate(id);
  // const response = await fetch(userApi + `/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ name: "User 11" }),
  // });
  // if (response.ok) {
  //   //Thành công
  //   showUser();
  // }
};
const showDetailUser = async (id) => {
  const response = await fetch(userApi + `/${id}`);
  const user = await response.json();
  renderUser(user);
};
const query = {
  _sort: "id",
  _order: "desc",

  _limit: 3,
  //   _page: 1,
};
const showUser = async () => {
  const queryString = Object.keys(query)
    ? `?${new URLSearchParams(query).toString()}`
    : "";
  const response = await fetch(userApi + queryString);
  const users = await response.json();
  render(users);
  // phân trang
  // tính tổng
  const totalUser = response.headers.get("X-Total-Count");
  renderPaginate(totalUser);
};
showUser();

//Xử lý thêm dữ liệu
const formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries([...new FormData(e.target)]);
  // addUser(formData);
  if (form.dataset.id) {
    // sửa
    console.log("Cập nhật");
    const id = form.dataset.id;
    updateUserApi(id, formData);
  } else {
    // thêm
    addUser(formData);
  }
});
const updateUserApi = async (id, data) => {
  const response = await fetch(userApi + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    showUser();
    resetForm();
  }
};
const resetForm = () => {
  form.reset();
  delete form.dataset.id;
  form.querySelector("button").innerText = "Thêm";
};
const addUser = async (data) => {
  const response = await fetch(userApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    //Thành công
    showUser();
  }
};
// Tìm kiếm
search.addEventListener("input", (e) => {
  // console.log(e.target.value);
  // const keyword = e.target.value ? e.target.value.trim() : "";
  // console.log(keyword);
  // // Gọi api có tham số ?q=keyword
  // query.q = keyword;
  // showUser();
});
// kỹ thuật debounce (delay một hàm khi không thao tác trong một khoảng thời gian) giúp đỡ bị tràn request
// debounce là một hàm
const handleSearch = debounce((e) => {
  const keyword = e.target.value ? e.target.value.trim() : "";
  console.log(keyword);
  query.q = keyword;
  showUser();
}, 500);
search.addEventListener("input", handleSearch);
//Client side rendering (CSR)
