const signupFormHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/sign')
    const name = event.target.name.value;
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (name && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile:id');
        } else {
            alert('Failed to log in.');
        }
    }
}
document.querySelector('.signUp-btn').addEventListener('click', signupFormHandler)
