let counterValue = 0;
const minus = document.querySelector('[data-action="decrement"]');
const plus = document.querySelector('[data-action="increment"]');
minus.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});
plus.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});
