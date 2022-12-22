const URL_PRENOTAZIONI = "http://localhost:9014/api/prenotazioni";

var elencoPrenotazioni = [];

function fetchPrenotazioni() {
	fetch(URL_PRENOTAZIONI, {})
	    .then(data => data.json())
	    .then(response => {
            LMAX = response.length; //Math.ceil(response.length / 10);
            stampaPrenotazioni(response);
        });
}

fetchPrenotazioni();

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

        if (cEnd < LMAX) {
            cStart += 10;
            cEnd += 10;
            fetchPrenotazioni();
        }

    } else if (cosaFaccio == 'diminuisci') {

        if (cStart >= 10 && cEnd >= 20) {
            cStart -= 10;
            cEnd -= 10;
            fetchPrenotazioni();
        }
    }
    // console.log(cStart);
    // console.log(cEnd);
}

fetchUtenti();
fetchVeicoli();

function stampaPrenotazioni(elencoPrenotazioni) {
    tableBody.innerHTML = '';
    for(var i = cStart; i < cEnd; i++) {
        
        const TR = document.createElement('tr');

        /* {
			"id": 2,
			"veicolo": {
			"veicoloId": "Ferrari",
			"tipologia": "Auto",
			"alimentazione": "Benzina",
			"descrizione": "599xx evo, colore nero, 499,99cc",
			"posizioneAttuale": "Italia, Roma, Via Genzano 89",
			"disponibilitaNoleggio": "Giornaliero",
			"immagineVeicolo": "https://www.gtspiritmedia.com/gtspirit/uploads/2015/06/Ferrari-599XX-For-Sale6.jpg",
			"utenteIns": {}
			},
			"utente": {
			"userId": "Paolo",
			"ultimaModifica": "2022-12-20T16:16:53",
			"password": "paolo",
			"firma": "Utente con diritti minimi",
			"tipo": "B",
			"nome": "Paolo",
			"cognome": "DeSantis",
			"nascita": "20/10/2001",
			"email": "paolo.desantis@gmail.com",
			"dataIscrizione": "2010-08-01T10:20:40"
			},
			"pagamento": {
			"id": 2,
			"metodoPagamento": "Mastercard",
			"nCarta": "5167099046768999",
			"scadenza": "2025-01-01",
			"cvv": "321",
			"importo": 13.5
			},
			"dataPrenotazione": "2023-02-10T10:10:22"
			}
        */
	   
	   	if (elencoPrenotazioni[i] == null) {
			break;
		}
            
        const TD = document.createElement('td');
        TD.textContent = elencoPrenotazioni[i].id;
        TR.appendChild(TD);
        
        const TD2 = document.createElement('td');
        const myArray = elencoPrenotazioni[i].dataPrenotazione.split("T");
        TD2.setAttribute('value', myArray[0]);
        TD2.textContent = getDataFormattata(myArray[0]);
        TR.appendChild(TD2);
        
        const TD3 = document.createElement('td');
        TD3.textContent = elencoPrenotazioni[i].utente.userId;
        TR.appendChild(TD3);
        
        const TD4 = document.createElement('td');
        TD4.textContent = elencoPrenotazioni[i].veicolo.id;
        TR.appendChild(TD4);

        const TD5 = document.createElement('td');
        //TD5.innerHTML = '<a href="#id" class="bi bi-pencil-fill" style="cursor:pointer";></a>';
        
        const AHREF = document.createElement('a');
        AHREF.setAttribute('href', '#veicoloId');
        AHREF.classList.add('bi', 'bi-pencil-fill');
        AHREF.setAttribute('style', 'cursor:pointer; color:darkblue;');
        AHREF.addEventListener('click', () => {
			document.querySelector('#mioForm').removeAttribute('hidden');
            document.querySelector('#id').value = TD.textContent;
            
            var dataPren = document.querySelector('#dataPrenotazione');
            
            dataPren.value = TD2.getAttribute('value');
  			dataPren.setAttribute("min", dataOggi());
            
            if (TD3.textContent != '') {
            	document.querySelector('#utenteId').value = TD3.textContent;
           	} else {
				document.querySelector('#utenteId').value = '-1';
			}
            
			if (TD4.textContent != '') {
            	document.querySelector('#veicoloId').value = TD4.textContent;
           	} else {
				document.querySelector('#veicoloId').value = '-1';
			}
        });

		TD5.appendChild(AHREF);
        TR.appendChild(TD5);

        const TD6 = document.createElement('td');
        //TD6.innerHTML = '<i class="bi bi-trash-fill" style="cursor:pointer";></i>';
        
        const ICON = document.createElement('i');
        ICON.classList.add('bi', 'bi-trash-fill');
        ICON.setAttribute('style', 'cursor:pointer; color:black;');
        ICON.addEventListener('click', () => {
	
			fetch(`http://localhost:9014/api/prenotazioni/${TD.textContent}`, {
				method: 'DELETE',
			})
				.then(data => data.json())
				.then(response => console.log(response));
				LMAX--;
				setTimeout(() => {
						location.reload();
					}, 1000);
	
        });

		TD6.appendChild(ICON);
        TR.appendChild(TD6);

        tableBody.appendChild(TR);
    }
    this.elencoPrenotazioni = elencoPrenotazioni;
}

document.querySelector('#indietroBtn').addEventListener('click', () => {
    incrDimCon('diminuisci');
});

document.querySelector('#avantiBtn').addEventListener('click', () => {
    incrDimCon('incrementa');
});



var prenotazioneIdDaCheckare = document.querySelector('#id');
/*var veicoloId = document.querySelector('#veicoloId');

function checkUtente(event) {
    if (utenteId.value == '-1') {
        utenteId.classList.remove('is-valid');
        utenteId.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        utenteId.classList.remove('is-invalid');
        utenteId.classList.add('is-valid');
        return true;
    }
}

utenteId.addEventListener('input', checkUtente);
*/
function checkPrenotazioneId(event) {
    if (prenotazioneIdDaCheckare.value.trim() == '') {
        prenotazioneIdDaCheckare.classList.remove('is-valid');
        prenotazioneIdDaCheckare.classList.add('is-invalid');
        event.preventDefault();
        return false;
    } else {
        prenotazioneIdDaCheckare.classList.remove('is-invalid');
        prenotazioneIdDaCheckare.classList.add('is-valid');
        return true;
    }
}

prenotazioneIdDaCheckare.addEventListener('input', checkPrenotazioneId);

document.querySelector('#mioForm').addEventListener('submit', event => {
    
    if (checkPrenotazioneId(event) == false) {
		document.querySelector('#utenteIdText').removeAttribute('hidden');
		document.querySelector('#veicoloIdText').removeAttribute('hidden');
        event.preventDefault();
        return true;
    }
    
    setTimeout(() => {
		location.reload();
	}, 1000);
});

function fetchUtenti() {
	
	fetch("http://localhost:9014/api/utentiByTipo/B", {})
		.then(data => data.json())
		.then(response => {
			
			var utenteId = document.querySelector('#utenteId');
			utenteId.innerHTML = '';
			
			const OPTIONDEFAULT = document.createElement('option');
			OPTIONDEFAULT.value = '-1';
            OPTIONDEFAULT.textContent = 'Utenti disponibili';
            //OPTIONDEFAULT.setAttribute('selected', true);
            OPTIONDEFAULT.setAttribute('disabled', true);
            utenteId.appendChild(OPTIONDEFAULT);
			
			response.forEach(element => {
                
                const OPTION = document.createElement('option');
                
                OPTION.value = element.userId;
                OPTION.textContent = element.userId;
                
                utenteId.appendChild(OPTION);
                
         	});
			
		});
	
}

function fetchVeicoli() {
	
	fetch("http://localhost:9014/api/veicoli", {})
		.then(data => data.json())
		.then(response => {
			
			var veicoloId = document.querySelector('#veicoloId');
			veicoloId.innerHTML = '';
			
			const OPTIONDEFAULT = document.createElement('option');
			OPTIONDEFAULT.value = '-1';
            OPTIONDEFAULT.textContent = 'Veicoli disponibili';
            //OPTIONDEFAULT.setAttribute('selected', true);
            OPTIONDEFAULT.setAttribute('disabled', true);
            veicoloId.appendChild(OPTIONDEFAULT);
			
			response.forEach(element => {
                
                const OPTION = document.createElement('option');
                
                OPTION.value = element.id;
                OPTION.textContent = element.id;
                
                veicoloId.appendChild(OPTION);
                
         	});
	
		});
}

function dataOggi() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth()+1;
  if (mm < 10) dd="0" + dd;
  var dd = today.getDate();
  if (dd < 10) dd="0" + dd;
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

function getDataFormattata(data) {

    const array = data.split('-');

    return `${array[2]}/${array[1]}/${array[0]}`;

}