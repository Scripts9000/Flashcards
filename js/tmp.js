document.addEventListener("DOMContentLoaded", function () {
    // ...
  
    // Attach an event listener to the form submission button
    const submitButton = document.querySelector('#submit-button');
    if (submitButton) {
      submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default form submission
  
        // Gather form data
        const formData = {
          fname: document.querySelector('#fname').value,
          lname: document.querySelector('#lname').value,
          user_email: document.querySelector('#mail').value,
          user_message: document.querySelector('#msg').value,
        };
  
        // Send an HTTP POST request to the server
        fetch('/collect-info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.text())
          .then(data => {
            // Handle the server's response
            console.log(data); // You can display the response message on the web page
          })
          .catch(error => {
            console.error('Error:', error);
          });
      });
    }
  
    // ...
  });