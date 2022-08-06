const signUpHandler = (event) => {
    event.preventDefault();

    const signName = document.querySelector("signName").value.trim();
    const signEmail = document.querySelector("signEmail").value.trim();
    const signPass = document.querySelector("signPass").value.trim();
}








document.addEventListener("submit", signUpHandler)