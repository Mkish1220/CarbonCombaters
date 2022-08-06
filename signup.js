const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (name && email && password) {
        const response = await fetch('/api/sign', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile:id');
        } else {
            alert('Failed to log in.');
        }
    }
}
document.querySelector("#submit").addEventListener('click', signupFormHandler)
