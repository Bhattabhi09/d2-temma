const forgotPasswordForm = document.getElementById('forgot-password-form');

forgotPasswordForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = forgotPasswordForm.email.value;

	// Send reset link logic
	// Send an email to the user with a link to reset their password

	// Display a success message
	alert('A reset link has been sent to your email address.');
	forgotPasswordForm.reset();
});