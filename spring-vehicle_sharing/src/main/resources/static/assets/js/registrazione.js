// registrazione ancorata al singolo veicolo

var mioForm = document.querySelector('#register-form');
var loginAnchor = document.querySelector('#loginAnchor');

var nVeicoloAttualeReg = window.location.href.split("/").pop();

if (nVeicoloAttualeReg != "register") {
	
	loginAnchor.setAttribute('href', `../login/${nVeicoloAttualeReg}`);
	mioForm.setAttribute('action', `../registerCheck`);
}