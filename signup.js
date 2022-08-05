const signupFormHandler = async (event) => {
    event.preventDefault();
    document.location.replace('/sign')
}

document.querySelector('.signUp-btn').addEventListener('click', signupFormHandler)

document.querySelector('#learn-more').addEventListener('submit', learnMoreHandler)
