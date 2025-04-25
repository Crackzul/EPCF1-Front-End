const burger = document.querySelector('.burger'); // Cherche le bouton burger
const nav = document.querySelector('nav ul'); // Cherche mon menu nav ul

burger.addEventListener('click', () => { // Quand je clique sur le "bouton" il ajoute ou enlève la classe open sur nav ul
  nav.classList.toggle('open'); // ajoute "dynamiquement la classe .open"
});
