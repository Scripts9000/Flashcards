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

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', function (event) {
      // Check if "Flip to English" functionality is active
      if (!document.getElementById('flipToEnglish').classList.contains('active')) {
        // If not active, toggle the 'flipped' class on the clicked card
        this.classList.toggle('flipped');
  
        // Toggle visibility of card front and back based on 'flipped' class
        const cardFront = this.querySelector('.card-front');
        const cardBack = this.querySelector('.card-back');
  
        if (this.classList.contains('flipped')) {
          cardFront.style.display = 'none';
          cardBack.style.display = 'block';
        } else {
          cardFront.style.display = 'block';
          cardBack.style.display = 'none';
        }
      }
  
      // Prevent the default behavior (flipping the card) if "Flip to English" is active
      event.preventDefault();
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



