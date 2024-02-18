document.addEventListener("DOMContentLoaded", function () {
  const submenuLinks = document.querySelectorAll(".submenu-trigger");
  const submenus = document.querySelectorAll(".submenu");

  // Function to close all submenus
  function closeAllSubmenus() {
    submenus.forEach((submenu) => {
      submenu.style.display = "none";
    });
  }

  submenuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const submenu = link.nextElementSibling;
      const isSubMenuVisible = submenu.style.display === "block";

      // Close all submenus
      closeAllSubmenus();

      // Show or hide the clicked submenu
      submenu.style.display = isSubMenuVisible ? "none" : "block";
    });
  });

  // Click event listener for the document to close the submenu when clicking outside
  document.addEventListener("click", function (e) {
    const isInsideSubmenu = Array.from(submenus).some((submenu) =>
      submenu.contains(e.target)
    );

    if (!isInsideSubmenu) {
      closeAllSubmenus();
    }
  });

  // Close the submenu when the mouse leaves it
  submenuLinks.forEach(link => {
    link.nextElementSibling.addEventListener("mouseleave", function () {
      this.style.display = "none";
    });
  });

  // Card flipping code
  const cardContainers = document.querySelectorAll('.card-container');

  cardContainers.forEach(container => {
    const cards = container.querySelectorAll('.card');
    let isFlipped = false;

    cards.forEach(card => {
      const cardBack = card.querySelector('.card-back');

      card.addEventListener('click', () => {
        const isFlipToEnglishActive = document.querySelector('.flipToEnglish').classList.contains('active');

        if (isFlipToEnglishActive) {
          card.classList.toggle('flipped');

          const cardFront = card.querySelector('.card-front');
          const cardBack = card.querySelector('.card-back');

          if (card.classList.contains('flipped')) {
            cardFront.style.display = 'none';
            cardBack.style.display = 'block';
          } else {
            cardFront.style.display = 'block';
            cardBack.style.display = 'none';
          }
        } else {
          if (!isFlipped) {
            card.classList.add('flipped');
            cardBack.style.display = 'block';
          } else {
            card.classList.remove('flipped');
            cardBack.style.display = 'none';
          }

          isFlipped = !isFlipped;

          if (isFlipped) {
            setTimeout(() => {
              card.classList.remove('flipped');
              cardBack.style.display = 'none';
              isFlipped = false;
            }, 5000); // 5000 milliseconds = 5 seconds
          }
        }
      });
    });
  });

  /* shuffleCards */
  function shuffleCards() {
    const cardContainer = document.querySelector('.card-container');
    const cards = cardContainer.querySelectorAll('.card');

    const cardsArray = Array.from(cards);
    cardsArray.sort(() => Math.random() - 0.5);

    cardContainer.innerHTML = '';
    cardsArray.forEach(card => cardContainer.appendChild(card));
  }

  /* Flip to English */
  function flipToEnglish() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      // Toggle the 'flipped' class on each card
      card.classList.toggle('flipped');

      // Toggle visibility of card front and back based on 'flipped' class
      const cardFront = card.querySelector('.card-front');
      const cardBack = card.querySelector('.card-back');

      if (card.classList.contains('flipped')) {
        // If 'flipped' class is present, show card back and hide card front
        cardFront.style.display = 'none';
        cardBack.style.display = 'block';
      } else {
        // If 'flipped' class is not present, show card front and hide card back
        cardFront.style.display = 'block';
        cardBack.style.display = 'none';
      }
    });
  }

  // Assign click events to the navigation buttons
  document.querySelector('.shuffle').addEventListener('click', shuffleCards);
  document.querySelector('.flipToEnglish').addEventListener('click', flipToEnglish);
});
