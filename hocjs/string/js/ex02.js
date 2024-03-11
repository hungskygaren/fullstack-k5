var keyword = "i";
var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid,
alias tenetur voluptate porro delectus saepe cumque fugiat magnam
possimus, ipsum nostrum voluptatibus atque at totam, ullam quos lorem ratione
nam.`;

// var lowercase = content.toLowerCase();
// var slicecontent = lowercase.indexOf(keyword);
// var word = lowercase.slice(slicecontent, slicecontent + keyword.length);
// var newContent = lowercase.slice(slicecontent + keyword.length);

// console.log(word);
// document.write(
//   `<span>${content.slice(
//     slicecontent,
//     slicecontent + keyword.length
//   )}</span> ${newContent} `
// );
// ---------
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var output = "";
var count = 0;
while (position !== -1) {
  output +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}
output += content;
// content =
//   content.slice(0, position) +
//   `<span>${content.slice(position, position + keyword.length)}</span>` +
//   content.slice(position + keyword.length);

document.write(`<p>Tìm kiếm với từ khoá <b>${keyword}</b></p>`);
document.write(output);
document.write(`<P>Đã tìm thấy ${count} kết quả với từ khoá <b>lorem</b></P>`);
