const registerForm = document.getElementById('register-form');
const registerMessage = document.getElementById('register-message');

registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = registerForm.username.value;
	const email = registerForm.email.value;
	const password = registerForm.password.value;

	// Register user logic
	// Check if the username and email are unique
	// Hash and salt the password
	// Store the user data in a database

	// Display a success message
	registerMessage.textContent = 'Registration successful!';
    //alert("welcome to my site")
});