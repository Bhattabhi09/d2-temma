const loginForm = document.getElementById('login-form');
const registerLink = document.getElementById('register-link');

registerLink.addEventListener('click', () => {
	loginForm.style.display = 'none';
	registerLink.href = 'register.html';
});