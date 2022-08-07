const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    //PW - the conditional here reads email and password, but the front end asks for username and pass word for the sign in.  
    // PW - Maybe we should change the sign in to say login instead
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // PW - where is this supposed to be taking them? to their profile page based on user id?  i dont think we have that set up.  
      if (response.ok) {
        // document.location.replace('/profile:id');
        document.location.replace('/profile');
      } else {
        alert('Failed to log in.');
      }
    }
  };

document.querySelector('login-form').addEventListener('submit', loginFormHandler)