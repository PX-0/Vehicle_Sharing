const URL_VEICOLI = "http://localhost:9014/api/veicoli";

var elencoVeicoli = [];

function fetchVeicoli() {
	fetch(URL_VEICOLI, {})
	    .then(data => data.json())
	    .then(response => {
            LMAX = response.length; //Math.ceil(response.length / 10);
            stampaVeicoli(response);
            incrDimCon();
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

        if (cEnd < LMAX) {
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
    
    //disabled
    
    if (cStart < 10 && cEnd < 20) {
		document.querySelector('#indietroBtn').classList.add('disabled');
	} else {
		document.querySelector('#indietroBtn').classList.remove('disabled');
	}
	
	if (cEnd >= LMAX) {
		document.querySelector('#avantiBtn').classList.add('disabled');
	} else {
		document.querySelector('#avantiBtn').classList.remove('disabled');
	}
    
    // console.log(cStart);
    // console.log(cEnd);
}

const myModal = new bootstrap.Modal('#myModal', {
  keyboard: false
});

// Create toast instance
var element = document.getElementById("liveToast");
var myToast = new bootstrap.Toast(element);

if (localStorage.getItem("faiVedereIlToast")) {
	
	localStorage.removeItem("faiVedereIlToast");
	myToast.show();
}

var elementUpd = document.getElementById("liveToastUpd");
var myToastUpd = new bootstrap.Toast(elementUpd);

if (localStorage.getItem("faiVedereIlToastUpd")) {
	
	localStorage.removeItem("faiVedereIlToastUpd");
	myToastUpd.show();
}

function stampaVeicoli(elencoVeicoli) {
    tableBody.innerHTML = '';
    for(var i = cStart; i < cEnd; i++) {
        
        const TR = document.createElement('tr');

        /* 
        	<th scope="col">Veicolo&nbsp;ID</th>
	        <th scope="col">Modello</th>
	        <th scope="col">Marca</th>
	        <th scope="col">Colore</th>
	        <th scope="col">Cilindrata</th>
	        
	        <th scope="col">Alimentazione</th>
	        <th scope="col">Descrizione</th>
	        <th scope="col">Disponibilit??&nbsp;noleggio</th>
	        <th scope="col">Immagine</th>
	        <th scope="col">Posizione&nbsp;attuale</th>
	        <th scope="col">Tipologia</th>
	        <th scope="col">Inserito&nbsp;da</th>
        */
	   
	   	if (elencoVeicoli[i] == null) {
			break;
		}
            
        const TD = document.createElement('td');
        TD.textContent = elencoVeicoli[i].id;
        TR.appendChild(TD);
            
        const TD11 = document.createElement('td');
        TD11.textContent = elencoVeicoli[i].modello;
        TR.appendChild(TD11);
            
        const TD12 = document.createElement('td');
        TD12.textContent = elencoVeicoli[i].marca;
        TR.appendChild(TD12);
            
        const TD13 = document.createElement('td');
        TD13.textContent = elencoVeicoli[i].colore;
        TR.appendChild(TD13);
            
        const TD14 = document.createElement('td');
        if(elencoVeicoli[i].cilindrata == "-1" || elencoVeicoli[i].cilindrata == "0"){
            
            TD14.innerHTML = '<i class="bi bi-file-earmark-excel-fill"></i>';
            TD14.setAttribute('value', elencoVeicoli[i].cilindrata);

        }else{

            TD14.textContent = elencoVeicoli[i].cilindrata;
            TD14.setAttribute('value', elencoVeicoli[i].cilindrata);
        }
        TR.appendChild(TD14);
        
  		
        
        const TD2 = document.createElement('td');
        TD2.textContent = elencoVeicoli[i].alimentazione;
        TR.appendChild(TD2);
        
        const TD3 = document.createElement('td');
        TD3.classList.add('text-truncate');
        TD3.textContent = elencoVeicoli[i].descrizione;
        TR.appendChild(TD3);
        
        const TD4 = document.createElement('td');
        TD4.setAttribute('value', elencoVeicoli[i].disponibilitaNoleggio);

        if (elencoVeicoli[i].disponibilitaNoleggio == 'No' || elencoVeicoli[i].disponibilitaNoleggio == 'no') {
			TD4.textContent = 'Non disponibile';
		} else {
			TD4.textContent = elencoVeicoli[i].disponibilitaNoleggio;	
		}
		
        TR.appendChild(TD4);
        
        const TD5 = document.createElement('td');
        //TD5.textContent =  elencoVeicoli[i].immagineVeicolo;
        TD5.setAttribute('value', elencoVeicoli[i].immagineVeicolo);
        TD5.classList.add('text-truncate');
        
        const TESTIMG = document.createElement('img');
		
		console.log(elencoVeicoli[i].immagineVeicolo);
		
		if (elencoVeicoli[i].immagineVeicolo == null || elencoVeicoli[i].immagineVeicolo == 'null') {
			
			TD5.innerHTML = "<span class = 'text-danger'> Da definire </span>";
		} else {
			
			if (elencoVeicoli[i].immagineVeicolo.startsWith('http')) {
			    
			  TESTIMG.setAttribute('src', elencoVeicoli[i].immagineVeicolo);
			} else if (elencoVeicoli[i].immagineVeicolo == null) {
			    
			  TESTIMG.setAttribute('src',"../uploads/elementor-placeholder-image.jpg");
			} else {
				  
			  TESTIMG.setAttribute('src',"../assets/uploads/" + elencoVeicoli[i].immagineVeicolo);
			}
        TESTIMG.setAttribute("height", "45px");
        TESTIMG.setAttribute("width", "auto");
        TESTIMG.setAttribute("title", elencoVeicoli[i].immagineVeicolo);
        TD5.appendChild(TESTIMG);
		}
        
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
        //TD9.innerHTML = '<a href="#veicoloId" class="bi bi-pencil-fill" style="cursor:pointer"></a>';
        
        const AHREF = document.createElement('a');
        AHREF.setAttribute('href', '#mioForm');
        AHREF.classList.add('bi', 'bi-pencil-fill');
        AHREF.setAttribute('style', 'cursor:pointer; color:darkblue;');
        
        AHREF.addEventListener('click', () => {
			document.querySelector('#mioForm').removeAttribute('hidden');
            document.querySelector('#veicoloId').value = TD.textContent;
            document.querySelector('#alimentazione').value = TD2.textContent;
            document.querySelector('#descrizione').value = TD3.textContent;
			
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
			
			if (TESTIMG.getAttribute('src')) {
				document.querySelector('.preview').removeAttribute('hidden');
				document.querySelector('.preview').classList.add('mt-3');
				let previewGiaConFile = document.querySelector('#file-ip-1-preview');
				previewGiaConFile.setAttribute('src', TESTIMG.getAttribute('src'));
				previewGiaConFile.style.display = "block";
			    //previewGiaConFile.style.maxWidth = "100%";
			    previewGiaConFile.classList.add('img-fluid');
			    previewGiaConFile.classList.add('rounded');
			} else {
				document.querySelector('#file-ip-1-preview').setAttribute('src', '');
			}
		    
			document.querySelector('#modello').value = TD11.textContent;
			document.querySelector('#marca').value = TD12.textContent;
			document.querySelector('#colore').value = TD13.textContent;
			
			document.querySelector('#cilindrata').value = TD14.getAttribute('value');
			
			document.querySelector('#immagineVeicoloNomeFile').value = TESTIMG.getAttribute('title');

        });
		
		TD9.appendChild(AHREF);
        TR.appendChild(TD9);

        const TD10 = document.createElement('td');
        //TD10.innerHTML = '<i class="bi bi-trash-fill" style="cursor:pointer";></i>';
        
        const ICON = document.createElement('i');
        ICON.classList.add('bi', 'bi-trash-fill');
        ICON.setAttribute('style', 'cursor:pointer; color:black;');
        
        ICON.addEventListener('click', () => {
			
			var old_element = document.getElementById("modalBtnDelete");
			var new_element = old_element.cloneNode(true);
			old_element.parentNode.replaceChild(new_element, old_element);
			
			myModal.show();
		
			document.querySelector('#modalBtnDelete').addEventListener('click', () => {
				
				fetch(`http://localhost:9014/api/veicoli/${TD.textContent}`, {
					method: 'DELETE',
				})
					.then(data => data.json())
					.then(response => console.log(response));
					LMAX--;
					setTimeout(() => {
							localStorage.setItem("faiVedereIlToast", true);
							location.reload();
						}, 1000);
			});
		});

		TD10.appendChild(ICON);
        TR.appendChild(TD10);

        tableBody.appendChild(TR);
    }
    this.elencoVeicoli = elencoVeicoli;
    var tds = document.querySelectorAll('td')
    tds.forEach(td=>{
    td.classList.add('col');
})
}

document.querySelector('#indietroBtn').addEventListener('click', () => {
    incrDimCon('diminuisci');
});

document.querySelector('#avantiBtn').addEventListener('click', () => {
    incrDimCon('incrementa');
});



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

document.querySelector('#mioForm').addEventListener('submit', event => {
    
    if (!validator(event)) {
        event.preventDefault();
        return;
    }
    
	localStorage.setItem("faiVedereIlToastUpd", true);
    setTimeout(() => {
		location.reload();
	}, 1500);
});

document.querySelector("#delImg").addEventListener("change", () => {
	document.querySelector("#fileInGroup").classList.toggle("visually-hidden");
	document.querySelector("#fileHelp").classList.toggle("visually-hidden");
	document.querySelector("#delImgInGroup").classList.toggle("mt-3");
	document.querySelector("#delImgInGroup").classList.toggle("fs-5");
});

//preview immagine

document.querySelector('#immagineVeicolo').addEventListener('change', event => {
	
	document.querySelector('.preview').removeAttribute('hidden');
	//document.querySelector('.preview').classList.add('mb-3');
	document.querySelector('.preview').classList.add('mt-3');
	
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