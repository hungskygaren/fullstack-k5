var users = [
  {
    id: 1,
    name: "user 1",
    email: "user1@gmail.com",
  },
  {
    id: 2,
    name: "user 2",
    email: "user2@gmail.com",
  },
  {
    id: 3,
    name: "user 3",
    email: "user3@gmail.com",
  },
];
var root = document.querySelector("#root");
root.innerHTML = `
<form>
<div>
<input type="text" name="name" placeholder ="nhập tên">
</div>
<div>
<input type="text" name="email" placeholder ="nhập email">
</div>
</form>
<ul>

${users
  .map(function (user) {
    return `<li>${user.name} - ${user.email}<button>&times</button></li>`;
  })
  .join("")}
</ul>
`;
root.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  }
});
var form = root.querySelector("form");
forn.addEventListener("submit", function (e) {
  e.preventDefault;
  var name = this.querySelector('[name="name"]').value;
  var email = this.querySelector('[name="email"]').value;
  users.push({
    id: (Math.random() * 1000 + 1000).toPrecision(3),
    name: name,
    email: email,
  });
});

var ul = document.createElement("ul");
users.forEach(function (user) {
  var li = document.createElement("li");
  li.innerText = `${user.name} - ${user.email}`;
  var button = document.createElement("button");
  button.innerHTML = "&times;";
  li.append(button);
  ul.append(li);
  button.addEventListener("click", handleRemove);
});
root.append(ul);
function handleRemove(e) {
  e.target.parentElement.remove();
}
