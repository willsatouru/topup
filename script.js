// script.js
document.getElementById('topupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const username = document.getElementById('username').value;
    const amount = document.getElementById('amount').value;

    // Simple validation
    if (!username || amount <= 0) {
        alert('Please provide valid username and amount.');
        return;
    }

    // Display a success message or handle the top-up logic
    alert(`Top-up successful!\nUsername: ${username}\nAmount: ${amount}`);
});

// Theme toggle functionality
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    this.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
});