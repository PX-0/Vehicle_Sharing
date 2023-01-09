var modello = document.querySelector('#modello');
var marca = document.querySelector('#marca');
var colore = document.querySelector('#colore');
var cilindrata = document.querySelector('#cilindrata');


var alimentazione = document.querySelector('#alimentazione');
var descrizione = document.querySelector('#descrizione');

var tipologia = document.querySelector('#tipologia');

function checkModello(event) {
    if (modello.value.trim() == '') {
        modello.classList.remove('is-valid');
        modello.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        modello.classList.remove('is-invalid');
        modello.classList.add('is-valid');
        return true;
    }
}

modello.addEventListener('input', checkModello);

function checkMarca(event) {
    if (marca.value.trim() == '') {
        marca.classList.remove('is-valid');
        marca.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        marca.classList.remove('is-invalid');
        marca.classList.add('is-valid');
        return true;
    }
}

marca.addEventListener('input', checkMarca);

function checkColore(event) {
    if (colore.value.trim() == '') {
        colore.classList.remove('is-valid');
        colore.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        colore.classList.remove('is-invalid');
        colore.classList.add('is-valid');
        return true;
    }
}

colore.addEventListener('input', checkColore);

function checkCilindrata(event) {
    if (cilindrata.value.trim() == '') {
        cilindrata.classList.remove('is-valid');
        cilindrata.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        cilindrata.classList.remove('is-invalid');
        cilindrata.classList.add('is-valid');
        return true;
    }
}

cilindrata.addEventListener('input', checkCilindrata);



function checkAlimentazione(event) {
    if (alimentazione.value.trim() == '') {
        alimentazione.classList.remove('is-valid');
        alimentazione.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        alimentazione.classList.remove('is-invalid');
        alimentazione.classList.add('is-valid');
        return true;
    }
}

alimentazione.addEventListener('input', checkAlimentazione);

function checkDescrizione(event) {
    if (descrizione.value.trim() == '') {
        descrizione.classList.remove('is-valid');
        descrizione.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        descrizione.classList.remove('is-invalid');
        descrizione.classList.add('is-valid');
        return true;
    }
}

descrizione.addEventListener('input', checkDescrizione);

function checkTipologia(event) {
    if (tipologia.value == -1 || tipologia.value == '-1') {
        tipologia.classList.remove('is-valid');
        tipologia.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        tipologia.classList.remove('is-invalid');
        tipologia.classList.add('is-valid');
        return true;
    }
}

tipologia.addEventListener('input', checkTipologia);

function validator(event) {
	
	var chM = checkModello(event);
	var chMa = checkMarca(event);
	var chC = checkColore(event);
	var chCi = checkCilindrata(event);
	var chT = checkTipologia(event);
	var chA = checkAlimentazione(event);
	var chD = checkDescrizione(event);
		
	if (!chM || !chMa || !chC || !chCi || !chT || !chA || !chD)
		return false;
	
	return true;
}

// Create toast instance
var element = document.getElementById("liveToast");
var myToast = new bootstrap.Toast(element);

if (localStorage.getItem("faiVedereIlToast")) {
	
	localStorage.removeItem("faiVedereIlToast");
	myToast.show();
}

document.querySelector('#mioForm').addEventListener('submit', event => {
    
    if (!validator(event)) {
        event.preventDefault();
        return;
    }
    
	localStorage.setItem("faiVedereIlToast", true);
    setTimeout(() => {
		location.reload();
	}, 1000);
});

//preview immagine

document.querySelector('#immagineVeicolo').addEventListener('change', event => {
	
	document.querySelector('.preview').removeAttribute('hidden');
	document.querySelector('.preview').classList.add('mb-3');
	
	if(event.target.files.length > 0){
	    var src = URL.createObjectURL(event.target.files[0]);
	    var preview = document.getElementById("file-ip-1-preview");
	    preview.src = src;
	    preview.style.display = "block";
	    //preview.style.maxWidth = "100%";
	    preview.classList.add('img-fluid');
	    preview.classList.add('rounded');
	}
	
});