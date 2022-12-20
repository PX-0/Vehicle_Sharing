var veicoloId = document.querySelector('#veicoloId');
var alimentazione = document.querySelector('#alimentazione');
var descrizione = document.querySelector('#descrizione');

var tipologia = document.querySelector('#tipologia');

function checkVeicoloId(event) {
    if (veicoloId.value == '') {
        veicoloId.classList.remove('is-valid');
        veicoloId.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        veicoloId.classList.remove('is-invalid');
        veicoloId.classList.add('is-valid');
        return true;
    }
}

veicoloId.addEventListener('input', checkVeicoloId);

function checkAlimentazione(event) {
    if (alimentazione.value == '') {
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
    if (descrizione.value == '') {
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

document.querySelector('#mioForm').addEventListener('submit', event => {
    
    if (checkVeicoloId(event) == false || checkAlimentazione(event) == false || checkDescrizione(event) == false || checkTipologia(event) == false) {
        event.preventDefault();
        return;
    }
});