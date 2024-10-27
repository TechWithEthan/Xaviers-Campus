// Array of user credentials
const users = [
    { username: 'Admin', password: 'Admin' },
    { username: 'Strpes', password: 'Strpes' },
    { username: 'Samah', password: 'Samah' }
];

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Check credentials
    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    // Display message
    const messageDiv = document.getElementById('message');
    if (user) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
        // Redirect to the next page (replace 'nextPage.html' with your actual page)
        window.location.href = 'Deshboard.html'; // Change 'nextPage.html' to your target page
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password.';
    }
});
