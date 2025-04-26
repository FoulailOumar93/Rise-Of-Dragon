// dragon.js

const invokeButton = document.getElementById("invokeButton");
const fire = document.querySelector(".fire");
const dragonText = document.querySelector(".dragon-text");

invokeButton.addEventListener("click", () => {
  fire.classList.toggle("active");
  dragonText.classList.toggle("active");
});
