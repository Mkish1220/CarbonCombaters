const signUpFormHandler = async (event) => {
  event.preventDefault();
  const username = document.getElementById("signName").value.trim();
  const email = document.getElementById("signEmail").value.trim();
  const password = document.getElementById("signPass").value.trim();

  // sends a post to create the user
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // takes the user to the questions page if ok
    if (response.ok) {
      setInterval(() => {
        document.location.replace('/questions');
      }, 1000);
    } else {
      alert("Please Try Again");
    }
  }
};

document.addEventListener("submit", signUpFormHandler)