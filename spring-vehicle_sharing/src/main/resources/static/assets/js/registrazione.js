// registrazione ancorata al singolo veicolo

var mioForm = document.querySelector('#register-form');
var loginAnchor = document.querySelector('#loginAnchor');

var nVeicoloAttualeReg = window.location.href.split("/").pop();

if (!nVeicoloAttualeReg.startsWith("register")) {
	
	loginAnchor.setAttribute('href', `../login/${nVeicoloAttualeReg}`);
	mioForm.setAttribute('action', `../registerCheckVid`);
}

// controlli (la data di nascita non è obbligatoria)

var nome = document.querySelector('#nome');
var cognome = document.querySelector('#cognome');
var email = document.querySelector('#email');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var confermaPassword = document.querySelector('#confermaPassword');

var mioForm = document.querySelector('#register-form');

function nomeCheck() {
    if (nome.value.trim() == '') {
        nome.classList.remove('is-valid');
        nome.classList.add('is-invalid');
        return false;
    } else {
        nome.classList.add('is-valid');
        nome.classList.remove('is-invalid');
        return true;
    }
}

function cognomeCheck() {
    if (cognome.value.trim() == '') {
        cognome.classList.remove('is-valid');
        cognome.classList.add('is-invalid');
        return false;
    } else {
        cognome.classList.add('is-valid');
        cognome.classList.remove('is-invalid');
        return true;
    }
}

function emailCheck() {
    if (email.value.trim() == '') {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        return false;
    } else {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        return true;
    }
}

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

function confermaPasswordCheck() {
	
	if (confermaPassword.value.trim() == '' && confermaPassword.value == password.value)
		return false;
	
    if (confermaPassword.value.trim() == '' || confermaPassword.value != password.value) {
        confermaPassword.classList.remove('is-valid');
        confermaPassword.classList.add('is-invalid');
        return false;
    } else {
        confermaPassword.classList.add('is-valid');
        confermaPassword.classList.remove('is-invalid');
        return true;
    }
}

nome.addEventListener('input', nomeCheck);
cognome.addEventListener('input', cognomeCheck);
email.addEventListener('input', emailCheck);
username.addEventListener('input', usernameCheck);
password.addEventListener('input', passwordCheck);
password.addEventListener('input', confermaPasswordCheck);
confermaPassword.addEventListener('input', confermaPasswordCheck);

mioForm.addEventListener('submit', event => {
	
	var noChk = nomeCheck();
	var coChk = cognomeCheck();
	var emChk = emailCheck();
	var usChk = usernameCheck();
	var psChk = passwordCheck();
	var cpsChk = confermaPasswordCheck();

    if (!noChk || !coChk || !emChk || !usChk || !psChk || !cpsChk) {
        event.preventDefault();
        return;
    }
    
});

document.querySelector('#dataNascita').setAttribute('max', new Date().toISOString().split("T")[0]);