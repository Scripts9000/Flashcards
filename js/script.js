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

    document.addEventListener("DOMContentLoaded", function () {
      const submenuLinks = document.querySelectorAll(".submenu-trigger");
      const submenus = document.querySelectorAll(".submenu");
    

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
    
    });
    

    // Close the submenu when the mouse leaves it
    link.nextElementSibling.addEventListener("mouseleave", function () {
      this.style.display = "none";
    });
  });


  // Card flipping code
  const cardContainers = document.querySelectorAll('.card-container');

  cardContainers.forEach(container => {
    const cards = container.querySelectorAll('.card');
    cards.forEach(card => {
      const cardBack = card.querySelector('.card-back');
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

        // Add automatic flip back after 5 seconds
        if (isFlipped) {
          setTimeout(() => {
            card.classList.remove('flipped');
            cardBack.style.display = 'none';
            isFlipped = false;
          }, 5000); // 5000 milliseconds = 5 seconds
        }
      });
    });
  });
});

/* shuffleCards */
function shuffleCards() {
  var cardContainer = document.querySelector('.card-container');
  var cards = document.querySelectorAll('.card');

  var cardsArray = Array.from(cards);
  cardsArray.sort(() => Math.random() - 0.5);

  cardContainer.innerHTML = '';
  cardsArray.forEach(card => cardContainer.appendChild(card));
}


/* Flip to English */
const cards = document.querySelectorAll('.card');
let flipToEnglishActive = false;

// Function to toggle flip state for individual cards
function toggleCardFlip(card) {
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
}

// Click event for individual cards
cards.forEach(card => {
  card.addEventListener('click', function (event) {
    if (flipToEnglishActive) {
      toggleCardFlip(this);

      // Reset the state after a delay
      setTimeout(() => {
        if (this.classList.contains('flipped')) {
          toggleCardFlip(this);
        }
      }, 5000); // 5000 milliseconds = 5 seconds
    } else {
      // Normal behavior when "Flip to English" is not active
      toggleCardFlip(this);
    }

    event.preventDefault();
  });
});

// Click event for "Flip to English" button
document.getElementById('flip-to-english-btn').addEventListener('click', function () {
  flipToEnglishActive = !flipToEnglishActive;

  // Reset the state of individual cards
  if (!flipToEnglishActive) {
    cards.forEach(card => {
      if (card.classList.contains('flipped')) {
        toggleCardFlip(card);
      }
    });
  }
});




