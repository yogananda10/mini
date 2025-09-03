document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple animation effect on login
    alert(`Logging in as: ${username}`);
    
    // You can add real login logic here
    // For now, just reset the form
    this.reset();
});
