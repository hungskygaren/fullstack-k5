// Tạo Node mới
var h1 = document.createElement("h1");
h1.innerText = "Học lậ trình ko khó";
h1.classList.add("title", "title-large");
// Đưa Node lên UI
var root = document.querySelector("#root");
root.append(h1);

var h2 = document.createElement("h2");
h2.innerText = "Hello anh ";
root.append(h2);

var button = document.createElement("button");
button.innerText = "Click me";
root.append(button);
var count = 0;
button.addEventListener("click", function () {
  //   h2.innerText = "Hello anh em f8";
  //   h2.remove();
  //   var h2 = document.createElement("h2");
  //   h2.innerText = "Item " + ++count;
  //   root.prepend(h2);
  var newNode = document.createElement("h2");
  newNode.innerText = "Item " + ++count;
  root.insertBefore(newNode, h2); // chèn newnode vào sau h2
  //   root.insertBefore(newNode, h1.nextElementSibling);// chèn newnode vào vị trí tiếp theo của h1
});
