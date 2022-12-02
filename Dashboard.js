window.addEventListener('load', () => {
    const email = sessionStorage.getItem('email');
    const pass = sessionStorage.getItem('pass'); 
    document.getElementById('email').innerHTML = email;
    document.getElementById('surname').innerHTML = pass;

})