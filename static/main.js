let user;

function User(user) {
    this.email = user.email;
    this.password = user.password;
}

let modal = document.getElementById('login-modal');

function loadHeader() {
    $('#header').load('pages/partials/header.html');
}
function showLoginModal() {
    modal.classList.add('show');
}

function hideLoginModal() {
    modal.classList.remove('show');
}

function login() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    user = new User({
        email: email,
        password: pass
    });

    $.ajax({
        type: 'POST',
        data: JSON.stringify(user),
        contentType: 'application/json',
        url: 'http://localhost:3000/login',
        success: function (data) {
            console.log('success');
            console.log(data.user.role);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', data.token)
            if (data.user.role === "admin") {
                loadUrl("./pages/adminPage/admin.html");
            }
        }
    });

}

function logout() {
    let loginBtn = document.getElementById('login-button');
    loginBtn.classList.remove('hide');
    document.getElementById('logout-button').classList.add('hide');
    user = new User({});
    document.getElementById('user-email').innerHTML = '';

}



function loadUrl(newLocation) {
    window.location = newLocation;
    return false;
}

// init
$(document).ready(function () {
    loadHeader();
});
