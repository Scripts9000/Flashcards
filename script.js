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

// Toggle button for dark mode2 
const toggleButton2  = document.getElementById('switch');
const stylesheetLink2 = document.getElementById('stylesheet-link');
let isDarkMode2 = false;

toggleButton2.addEventListener('click', () => {
  isDarkMode2 = !isDarkMode2;
  if (isDarkMode2) {
    stylesheetLink2.href = 'dark-styles.css';
  } else {
    stylesheetLink2.href = 'styles.css';
  }
});

//--------------------------------