const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);
list.forEach(function (number, index) {
  console.log(`Category: ${number.firstElementChild.textContent}`);
  console.log(`Elements:${number.lastElementChild.children.length}`);
});
