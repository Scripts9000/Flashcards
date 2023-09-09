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

  // Toggle button for dark mode
  const toggleButton = document.getElementById('switch');
  const stylesheetLink = document.getElementById('stylesheet-link');
  let isDarkMode = true;
  toggleButton.checked = true;

  toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      stylesheetLink.href = 'dark-styles.css';
    } else {
      stylesheetLink.href = 'styles.css';
    }
  });

  // Info functionality
  const cards = document.querySelectorAll('.card');
  let popupTimeout;

  cards.forEach(card => {
    const popup = card.querySelector('.popup');
    
    card.addEventListener('mouseenter', () => {
      // Set a timeout to display the popup after 2 seconds
      popupTimeout = setTimeout(() => {
        popup.style.display = 'block';
      }, 500); // 500 milliseconds = 0.5 seconds
    });

    // Add mouseout event listener to hide the pop-up when the user moves away from the card
    card.addEventListener('mouseout', (e) => {
      // Check if the mouse is leaving the card to enter the pop-up
      if (!e.relatedTarget || !popup.contains(e.relatedTarget)) {
        // Hide the pop-up
        clearTimeout(popupTimeout);
        popup.style.display = 'none';
      }
    });
  });

    // Function to fetch and display the Hebrew date
    function updateHebrewDate() {
      fetch("https://www.hebcal.com/converter?cfg=json&cfg=json&gy=2023&gm=8&gd=31&g2h=1")
        .then(response => response.json())
        .then(data => {
          const hebDate = data.hebrew;
          document.getElementById("hebrew-date-value").textContent = hebDate;
        })
        .catch(error => {
          console.error("Error fetching Hebrew date:", error);
        });
    }
  
    // Call the updateHebrewDate function when the page loads
    window.onload = updateHebrewDate;

});

