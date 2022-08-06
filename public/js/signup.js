const signUpHandler = async (event) => {
    event.preventDefault();

    const signName = document.querySelector("signName").value.trim();
    const signEmail = document.querySelector("signEmail").value.trim();
    const signPass = document.querySelector("signPass").value.trim();

    if signName && signEmail && signPass
}








document.addEventListener("submit", signUpHandler)