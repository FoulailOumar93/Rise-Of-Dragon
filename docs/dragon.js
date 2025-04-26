// dragon.js
const invokeButton = document.getElementById("invokeButton");
const fire = document.querySelector(".fire");
const dragonText = document.querySelector(".dragon-text");
const yearSpan = document.getElementById("year");

// Gestion bouton Invoquer
invokeButton.addEventListener("click", () => {
  fire.classList.toggle("active");
  dragonText.classList.toggle("active");
});

// Mettre l'année automatiquement
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
