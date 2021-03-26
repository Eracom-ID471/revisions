const cards = [...document.querySelectorAll('.card')];
cards.forEach(card => {
  card.style.cursor = 'pointer';
  let down, up, link = card.querySelector('h2 a');
  // ajouter un délai pour éviter les clics accidentels
  card.onmousedown = () => down = +new Date();
  card.onmouseup = () => {
    up = +new Date();
    if ((up - down) < 200) {
      link.click();
    }
  }
});

// Notes: 
// ... is a spread / rest operator.
// cf https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition