const URL_VEICOLI = "http://localhost:9014/api/veicoli";

var elencoVeicoli = [];

function fetchVeicoli() {
	fetch(URL_VEICOLI, {})
	    .then(data => data.json())
	    .then(response => {
            LMAX = response.length; //Math.ceil(response.length / 10);
            stampaVeicoli(response);
        });
}

fetchVeicoli();

var cStart = 0;
var cEnd = 10;
var LMAX = 0;
var pagina = 1;

var tableBody = document.querySelector('#tableBody');

/**
 * 
 * @param {*} cosaFaccio => 'incrementa' o 'diminuisci'
 */
function incrDimCon(cosaFaccio) {

    if (cosaFaccio == 'incrementa') {

        if (cEnd  <= LMAX) {
            cStart += 10;
            cEnd += 10;
            fetchVeicoli();
        }

    } else if (cosaFaccio == 'diminuisci') {

        if (cStart >= 10 && cEnd >= 20) {
            cStart -= 10;
            cEnd -= 10;
            fetchVeicoli();
        }
    }
    // console.log(cStart);
    // console.log(cEnd);
}

function stampaVeicoli(elencoVeicoli) {
    tableBody.innerHTML = '';
    for(var i = cStart; i < cEnd; i++) {
        
        const TR = document.createElement('tr');

        /* "veicoloId": "Aovo",
            "tipologia": "Monopattino",
            "alimentazione": "Elettrico",
            "descrizione": "AovoPro colore nero opaco",
            "posizioneAttuale": "via tiburtina 1361 00131",
            "disponibilitaNoleggio": "true",
            "immagineVeicolo": "monopattinoAovo.jpg",
            "utenteIns": {
            "userId": "Amministratore",
            "ultimaModifica": "2022-12-19T14:13:53",
            "password": "Amministratore",
            "firma": "Amministratore dei servizi",
            "tipo": "A",
            "nome": "Paolino",
            "cognome": "Paperino",
            "nascita": "20/08/1900",
            "email": "paolino.paperino@paperopoli.com ",
            "dataIscrizione": "2006-01-01T00:00:00"
            },
            "prenotazioni": []
        */
	   
	   	if (elencoVeicoli[i] == null) {
			break;
		}
            
        const TD = document.createElement('td');
        TD.textContent = elencoVeicoli[i].veicoloId;
        TR.appendChild(TD);
        
        const TD2 = document.createElement('td');
        TD2.textContent = elencoVeicoli[i].alimentazione;
        TR.appendChild(TD2);
        
        const TD3 = document.createElement('td');
        TD3.textContent = elencoVeicoli[i].descrizione;
        TR.appendChild(TD3);
        
        const TD4 = document.createElement('td');
        TD4.setAttribute('value', elencoVeicoli[i].disponibilitaNoleggio);
        //TD4.innerHTML = elencoVeicoli[i].disponibilitaNoleggio == 'true' ? '<i class="bi bi-check-circle-fill"></i>' : '<i class="bi bi-x-circle-fill"></i>';
        if (elencoVeicoli[i].disponibilitaNoleggio == 'No' || elencoVeicoli[i].disponibilitaNoleggio == 'no') {
			TD4.textContent = 'Non disponibile';
		} else {
			TD4.textContent = elencoVeicoli[i].disponibilitaNoleggio;	
		}
		
        TR.appendChild(TD4);
        
        const TD5 = document.createElement('td');
        TD5.textContent =  elencoVeicoli[i].immagineVeicolo;
        TD5.setAttribute('value', elencoVeicoli[i].immagineVeicolo);
        //const IMG = document.createElement('img');
        
        //elencoVeicoli[i].immagineVeicolo = elencoVeicoli[i].immagineVeicolo.replace(String.fromCharCode(92),String.fromCharCode(92,92));
        //var linkEdited = '@{' + elencoVeicoli[i].immagineVeicolo.substring(25);
        //linkEdited += '}';
        
        //IMG.setAttribute('width', '125px');
        //IMG.setAttribute('height', 'auto');
        //IMG.setAttribute('th:src', linkEdited);
        //TD5.appendChild(IMG);
        TR.appendChild(TD5);
        
        const TD6 = document.createElement('td');
        TD6.textContent = elencoVeicoli[i].posizioneAttuale;
        TR.appendChild(TD6);
        
        const TD7 = document.createElement('td');
        TD7.textContent = elencoVeicoli[i].tipologia;
        TR.appendChild(TD7);
        
        const TD8 = document.createElement('td');
        TD8.textContent = `${elencoVeicoli[i].utenteIns.userId} - ${elencoVeicoli[i].utenteIns.nome} ${elencoVeicoli[i].utenteIns.cognome}`;
        TD8.setAttribute('value', elencoVeicoli[i].utenteIns.userId);
        TR.appendChild(TD8);

        const TD9 = document.createElement('td');
        TD9.innerHTML = '<a href="#veicoloId" class="bi bi-pencil-fill" style="cursor:pointer";></a>';
        TD9.addEventListener('click', () => {
			document.querySelector('#mioForm').removeAttribute('hidden');
            document.querySelector('#veicoloId').value = TD.textContent;
            document.querySelector('#alimentazione').value = TD2.textContent;
            document.querySelector('#descrizione').value = TD3.textContent;
            
            /*if (TD4.getAttribute('value') == 'true') {
				document.querySelector('#disponibilitaNoleggio').checked = true;
			} else {
				document.querySelector('#disponibilitaNoleggio').checked = false;
			}*/
			
			switch (TD4.getAttribute('value')) {
				case 'No' || 'no':
				case 'Prolungato' || 'prolungato':
				case 'Giornaliero' || 'giornaliero':
					document.querySelector('#disponibilitaNoleggio').value = TD4.getAttribute('value');
				break;
				default:
					document.querySelector('#disponibilitaNoleggio').value = '-1';
			}
			
			document.querySelector('#linkVeicolo').setAttribute('value', TD5.getAttribute('value'));
			document.querySelector('#posizioneAttuale').value = TD6.textContent;
			document.querySelector('#tipologia').value = TD7.textContent;
			document.querySelector('#utenteIns').value = TD8.getAttribute('value');
        });

        TR.appendChild(TD9);

        const TD10 = document.createElement('td');
        TD10.innerHTML = '<i class="bi bi-trash-fill" style="cursor:pointer";></i>';
        TD10.addEventListener('click', () => {
	
			fetch(`http://localhost:9014/api/veicoli/${TD.textContent}`, {
				method: 'DELETE',
			})
				.then(data => data.json())
				.then(response => console.log(response));
				LMAX--;
				setTimeout(() => location.reload(), 150);
	
        });

        TR.appendChild(TD10);

        tableBody.appendChild(TR);
    }
    this.elencoVeicoli = elencoVeicoli;
}

document.querySelector('#indietroBtn').addEventListener('click', () => {
    incrDimCon('diminuisci');
});

document.querySelector('#avantiBtn').addEventListener('click', () => {
    incrDimCon('incrementa');
});



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