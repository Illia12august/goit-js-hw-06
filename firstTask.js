const body = document.body;
const list = body.firstElementChild;
const firstLi = list.firstElementChild;
console.log(`Number of categories: ${list.children.length}`);

console.log(`Category: ${firstLi.firstElementChild.textContent}`);
console.log(`Elements: ${firstLi.lastElementChild.children.length}`);
console.log(
  `Category: ${firstLi.nextElementSibling.firstElementChild.textContent}`
);
console.log(
  `Elements: ${firstLi.nextElementSibling.lastElementChild.children.length}`
);
console.log(`Category: ${list.lastElementChild.firstElementChild.textContent}`);
console.log(
  `Elements: ${list.lastElementChild.lastElementChild.children.length}`
);
