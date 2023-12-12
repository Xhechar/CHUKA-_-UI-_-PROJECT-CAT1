function login() {
    var regNo = document.getElementById('regNo').value;
    var password = document.getElementById('password').value;
    var loginError = document.getElementById('loginError');

    // Check if fields are empty
    if (!regNo || !password) {
        loginError.textContent = 'Please enter registration number and password.';
        return;
    }

    // Simulate authentication by checking against localStorage
    var storedPassword = localStorage.getItem(regNo);

    if (storedPassword && storedPassword === password) {
        // Redirect to faculty page on successful login
        window.location.href = 'faculty2.html';
    } else {
        loginError.textContent = 'Invalid registration number or password.';
    }
    playWelcomeMessage();
}
 // Function to show the loader
 document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loader-container').style.display = 'none';
    }, 6000);

 }
);

