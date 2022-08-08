const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        // body: JSON.stringify({ email, password }),
        // headers: { 'Content-Type': 'application/json' },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email.value,
          password: form.password.value,
        }),
      })
  // PW - where is this supposed to be taking them? to their profile page based on user id?  i dont think we have that set up.  
      if (data.error) {
        alert('Failed to log in.');
      } else {
        document.location.replace('/profile');
      }
    }
  };

document.querySelector('login-form').addEventListener('submit', loginFormHandler)

// const express = require('express');
// const app = express();

// const users = []

// app.set('view engine', 'handlebars');
// app.use(express.urlencoded ({extended: false}));

// app.get('/', (req, res) => {
//     res.render('login');
// })

// app.post('/', (req, res) => {
// })

// app.listen(3000);
