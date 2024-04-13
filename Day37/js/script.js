const todoList = document.querySelector(".todo-list");
// const todoListDone = document.querySelector(".todo-list-done");
// const addModal = document.querySelector(".add-modal");
// const formAdd = addModal.querySelector("form");
// const count = document.querySelector(".done");
// const inputSearch = document.querySelector(`[type="search"]`);

const todoApi = "http://localhost:3000/list";
// fetch(todoApi)
//   .then((response) => {
//     //Đọc dữ liệu tu api
//     //   response.text().then((data) => {
//     //     console.log(data);
//     //     const user = JSON.parse(data);
//     //     console.log(user);
//     //   });
//     return response.json();
//   })
//   .then((todos) => {
//     console.log(todos);
//     //
//   });
const render = (todos) => {
  todoList.innerHTML = `${todos
    .map(
      ({ name }) =>
        `<div
  class="todo-item flex justify-between items-center bg-gray-100 p-4 rounded-md shadow"
>
  <p class="flex-1">${name}</p>
  <div class="flex gap-2">
    <button
      class="btn-edit bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      Edit
    </button>
    <button
      class="btn-delete bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Delete
    </button>
    <button
      class="btn-done bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Done
    </button>
  </div>
</div>`
    )
    .join("")}`;
};
const showTodo = async () => {
  const response = await fetch(todoApi);
  const todos = await response.json();
  render(todos);
};
showTodo();
