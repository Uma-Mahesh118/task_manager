function handleSubmit () {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    sessionStorage.setItem("email", name);
    sessionStorage.setItem("pass", pass);

    return;
}