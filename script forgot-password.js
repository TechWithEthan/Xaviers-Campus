document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value;
    const securityAnswer = document.getElementById('securityQuestion').value;
    const message = document.getElementById('message');

    // Simple form validation
    if (email && securityAnswer) {
        // Simulate password reset process
        message.innerHTML = `<span style="color: green;">Password reset link sent to ${email}!</span>`;
    } else {
        message.innerHTML = `<span style="color: red;">Please fill in all fields.</span>`;
    }

    // Clear message after a few seconds
    setTimeout(() => {
        message.innerHTML = '';
    }, 4000);
});
