document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Basic validation
      if (!name || !email || !message) {
        statusMessage.innerHTML = '<div class="alert alert-danger">All fields are required.</div>';
        return;
      }
  
      if (!validateEmail(email)) {
        statusMessage.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
        return;
      }
  
      // Simulate sending the data (here you can add your actual form submission logic)
      statusMessage.innerHTML = '<div class="alert alert-info">Sending your message...</div>';
  
      // Simulating success message after form submission
      setTimeout(function() {
        statusMessage.innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';
        contactForm.reset(); // Reset form fields
      }, 2000);
    });
  
    // Function to validate email format
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      return emailPattern.test(email);
    }
  });  