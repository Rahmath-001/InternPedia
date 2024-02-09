const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameRequired = usernameInput.nextElementSibling;
const passwordRequired = passwordInput.nextElementSibling;
const successMessage = document.getElementById('success-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Check if fields are empty and display required message
    if (usernameInput.value === '') {
        usernameRequired.style.display = 'block';
    } else {
        usernameRequired.style.display = 'none';
    }

    if (passwordInput.value === '') {
        passwordRequired.style.display = 'block';
    } else {
        passwordRequired.style.display = 'none';
    }

    // Simulate successful login
    // successMessage.classList.remove('hidden');
    setTimeout(() => {
        successMessage.style.display = 'block';
    }, 2000);
});
