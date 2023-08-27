const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach(container => {
  const cards = container.querySelectorAll('.card'); // Select all cards within the container

  cards.forEach(card => {
    const cardBack = card.querySelector('.card-back'); // Move this line inside the loop
    let isFlipped = false;

    card.addEventListener('click', () => {
      if (!isFlipped) {
        card.classList.add('flipped');
        cardBack.style.display = 'block';
      } else {
        card.classList.remove('flipped');
        cardBack.style.display = 'none';
      }

      isFlipped = !isFlipped;
    });
  });
});

