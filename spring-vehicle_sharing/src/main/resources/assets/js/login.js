var username = document.querySelector('#username');
var password = document.querySelector('#password');
var btnLogin = document.querySelector('#btnLogin');

document.querySelector('#mostraPassword').addEventListener('change', () => {
    password.getAttribute('type') == 'text' ? password.setAttribute('type', 'password') : password.setAttribute('type', 'text');
});

function usernameCheck() {
    if (username.value.trim() == '') {
        username.classList.remove('is-valid');
        username.classList.add('is-invalid');
        return false;
    } else {
        username.classList.add('is-valid');
        username.classList.remove('is-invalid');
        return true;
    }
}

function passwordCheck() {
    if (password.value.trim() == '') {
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        return false;
    } else {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
        return true;
    }
}

username.addEventListener('input', usernameCheck);
password.addEventListener('input', passwordCheck);

const URL_UTENTI = "http://localhost:9014/api/utenti";

btnLogin.addEventListener('click', (event) => {

    if (!usernameCheck() || !passwordCheck()) {
        event.preventDefault();
        return;
    }
    
    const URL_UTENTIBYCREDENTIALS = `http://localhost:9014/api/utentiByCredentials/${username.value}&${password.value}`;

    fetch(URL_UTENTIBYCREDENTIALS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(data => {
        console.log(data.status);
        return data.json();
    })
    .then(response => {
        console.log(response);
    })
    // .catch(error => {
    //     console.log('aaaaaaaaaaaaaaaa' + error);
    // })
    ;

});