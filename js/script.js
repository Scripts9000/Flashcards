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

