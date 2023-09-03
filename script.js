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

        link.addEventListener("mouseover", function () {
            const submenu = link.nextElementSibling;
            submenu.style.display = "block";
        });

        // Close the submenu when the mouse leaves it
        link.nextElementSibling.addEventListener("mouseleave", function () {
            this.style.display = "none";
        });
    });

    // Close submenus when clicking outside of them
    document.addEventListener("click", function (e) {
        if (!e.target.classList.contains("submenu-trigger")) {
            closeAllSubmenus();
        }
    });
});


// card flipping code --->

const cardContainers = document.querySelectorAll('.card-container');

// Your existing card flipping code
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

      // Add the automatic flip back after 5 seconds
      if (isFlipped) {
        setTimeout(() => {
          card.classList.remove('flipped');
          cardBack.style.display = 'none';
          isFlipped = false;
        }, 3000); // 5000 milliseconds = 5 seconds
      }
    });
  });
});

// Toggle button for dark mode2 
const toggleButton2 = document.getElementById('switch');
const stylesheetLink2 = document.getElementById('stylesheet-link');
let isDarkMode2 = true;
toggleButton2.checked = true;

toggleButton2.addEventListener('click', () => {
  isDarkMode2 = !isDarkMode2;
  if (isDarkMode2) {
    stylesheetLink2.href = 'dark-styles.css';
  } else {
    stylesheetLink2.href = 'styles.css';
  }
});
