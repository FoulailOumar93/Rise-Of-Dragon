// dragon.js

// Ton code existant pour le feu :
const invokeButton = document.getElementById("invokeButton");
const fire = document.querySelector(".fire");
const dragonText = document.querySelector(".dragon-text");

invokeButton.addEventListener("click", () => {
  fire.classList.toggle("active");
  dragonText.classList.toggle("active");
});

// Nouveau : Mettre l'année automatique
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
