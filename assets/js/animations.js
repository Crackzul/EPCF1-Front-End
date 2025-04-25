// On sélectionne tous les éléments qui ont la classe .reveal-item
const revealItems = document.querySelectorAll('.reveal-item');

// Fonction qui va gérer l'apparition progressive de chaque élément
function revealStaggered() {
  // On définit une hauteur de déclenchement : ici 90% de la hauteur de la fenêtre
  // Dès qu’un élément entre dans cette zone, on l’affiche avec l’animation
  const triggerBottom = window.innerHeight * 0.9;

  // Pour chaque élément à animer...
  revealItems.forEach((el, index) => {
    // On récupère sa position par rapport à la fenêtre
    const rect = el.getBoundingClientRect();

    // Si le haut de l’élément est visible dans la fenêtre (en dessous de triggerBottom)
    if (rect.top < triggerBottom) {
      // On ajoute la classe .visible avec un petit décalage en fonction de l’index
      // => effet cascade (chaque élément apparaît après l'autre, de 150ms en 150ms)
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 150);
    }
  });
}

// On déclenche la fonction quand la page charge...
window.addEventListener('load', revealStaggered);

// ...et à chaque scroll pour détecter les éléments qui arrivent dans la vue
window.addEventListener('scroll', revealStaggered);

