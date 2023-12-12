function signup() {
    var regNo = document.getElementById('regNo').value;
    var password = document.getElementById('password').value;

    var signupError = document.getElementById('signupError');

    // Check if fields are empty
    if (!regNo || !password) {
        signupError.textContent = 'Please enter registration number and password.';
        return;
    }

    // Check if the user already exists in localStorage
    if (localStorage.getItem(regNo)) {
        signupError.textContent = 'Registration number already exists. Please choose a different one.';
        return;
    }

    // Store signup details in localStorage
    localStorage.setItem(regNo, password);

    // Redirect to login page on successful signup
    window.location.href = 'game.html';
}
