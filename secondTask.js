const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const rar = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList = "item";
  return newLi;
});
list.append(...rar);
