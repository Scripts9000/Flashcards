document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the submit button
  const submitButton = document.getElementById("submit-button");
  const successMessage = document.getElementById("success-message"); // Get the success message element
  const errorMessage = document.getElementById("email-error-message"); // Get the email error message element

  // Get the clear button element
  const clearButton = document.getElementById("clear-button");

  // Get the message textarea and character counter element
  const messageTextarea = document.getElementById("msg");
  const messageCounter = document.getElementById("message-counter");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Submit button clicked.");

    // Disable the submit button to prevent multiple clicks
    submitButton.disabled = true;

    // Gather form data
    const formData = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      user_email: document.getElementById("mail").value,
      user_country: document.getElementById("country").value,
      user_level: document.getElementById("level").value,
      user_message: messageTextarea.value, // Use the textarea value
    };

    // Select the email input and error message div
    const emailInput = document.getElementById("mail");
    const emailErrorMessage = document.getElementById("email-error-message");

    // Validate the email using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(formData.user_email)) {
      // Display an error message if the email format is incorrect
      emailErrorMessage.textContent = "Invalid email format";
      emailErrorMessage.style.display = "block";

      // Re-enable the submit button
      submitButton.disabled = false;

      return; // Don't proceed with sending the form
    } else {
      // If the email format is valid, clear the error message
      emailErrorMessage.textContent = "";
      emailErrorMessage.style.display = "none";
    }

    // Show loading text on the submit button
    submitButton.value = "Submitting...";

    // Function to send form data to the server for email processing
    function sendEmail(formData) {
      // Send form data to the server using the fetch API
      console.log("Sending email...");
      fetch('/collect-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            // If the response status is OK (2xx), display the success message
            successMessage.style.display = "block";
            successMessage.textContent = "✅ Message sent!";
            successMessage.classList.add("success"); // You can style it with CSS

            // Reset the submit button text and re-enable it
            submitButton.value = "Submit";
            submitButton.disabled = false;
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    // Send the email using a client-side method (e.g., fetch)
    sendEmail(formData);
  });

  // Add a click event listener to the clear button
  clearButton.addEventListener("click", function () {
    // Clear the form fields
    clearFormFields();

    // Clear the success message, email error message, and character counter
    successMessage.style.display = "none";
    errorMessage.style.display = "none";
    messageCounter.textContent = "128 characters remaining";

    // Enable the submit button
    submitButton.disabled = false;
  });

  // Add an input event listener to the message textarea for character counting
  messageTextarea.addEventListener("input", function () {
    const messageLength = messageTextarea.value.length;
    const remainingCharacters = 128 - messageLength;

    // Update the character counter
    messageCounter.textContent = remainingCharacters + " characters remaining";

    // If the message exceeds the limit, truncate it
    if (messageLength > 128) {
      messageTextarea.value = messageTextarea.value.substring(0, 128);
      messageCounter.textContent = "0 characters remaining";
    }
  });

  // Function to clear form fields
  function clearFormFields() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("country").value = "";
    document.getElementById("level").value = "";
    messageTextarea.value = ""; // Clear the message textarea
  }


  
});
