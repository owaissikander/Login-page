



var email = document.getElementById('email')
var password = document.getElementById('password')
var login_cantainer = document.getElementById('login_cantainer')
var home_cantainer = document.getElementById('home_cantainer')
var userEmail = document.getElementById('userEmail')


function login() {
    if (!email.value || !password.value)
        return alert('It is empty');
    localStorage.setItem('email', email.value);
    checkUserIDLogin()
}

function checkUserIDLogin() {
    var email = localStorage.getItem('email')
    if (email) {
        userEmail.innerText= email
        login_cantainer.style.display = 'none'
        home_cantainer.style.display = 'block'
    } else {
        login_cantainer.style.display = 'block'
        home_cantainer.style.display = 'none'
    }
}

checkUserIDLogin()


function logout(){
    localStorage.removeItem('email')
    checkUserIDLogin()
}