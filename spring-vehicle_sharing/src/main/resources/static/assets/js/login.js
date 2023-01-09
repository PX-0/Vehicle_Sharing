var username = document.querySelector('#username');
var password = document.querySelector('#password');
var mioForm = document.querySelector('#form-login');

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

mioForm.addEventListener('submit', event => {
	
	var usChk = usernameCheck();
	var psChk = passwordCheck();	

    if (!usChk || !psChk) {
        event.preventDefault();
        return;
    }
    
    // const URL_UTENTIBYCREDENTIALS = `http://localhost:9014/api/utentiByCredentials/${username.value}&${password.value}`;

    // fetch(URL_UTENTIBYCREDENTIALS, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Credentials" : true
    //     }
    // })
    // .then(data => data.json())
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => {
    //     if (error == 'SyntaxError: Unexpected end of JSON input') {
    //         alertPlaceholder.innerHTML = '';
    //         alert('Credenziali errate', 'danger')
    //     }
    // });

});

// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible mt-3" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// alertPlaceholder.innerHTML = '';
// alert('Credenziali errate', 'danger')


// registrazione ancorata al singolo veicolo

var nVeicoloAttualeReg = window.location.href.split("/").pop();

if (nVeicoloAttualeReg != "login")
	document.querySelector('#registerAnchor').setAttribute('href', `../register/${nVeicoloAttualeReg}`)