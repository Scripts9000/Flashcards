const cardContainers = document.querySelectorAll('.card-container');

// Your existing card flipping code
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

// Dark mode toggle functionality
const toggleButton = document.getElementById('dark-mode-toggle');
const stylesheetLink = document.getElementById('stylesheet-link');
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    stylesheetLink.href = 'dark-styles.css';
  } else {
    stylesheetLink.href = 'styles.css';
  }
});
