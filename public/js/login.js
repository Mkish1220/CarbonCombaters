console.log("outside function")

const loginFormHandler = async (event) => {
  console.log("inside function")
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
 
    if (email && password) {
     
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        // headers: {
        //   Accept: "application/json, text/plain, */*",
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify({
        //   email: form.email.value,
        //   password: form.password.value,
        // }),
      })
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert("Please Try Again");
      // if (data.error) {
      //   alert('Failed to log in.');
      // } else {
      //   document.location.replace('/profile');
      }
    }
  };

document.addEventListener('submit', loginFormHandler)

