const urlHead = "https://nominatim.openstreetmap.org/search.php?q=";
const urlTail = "&format=json&limit=1";

//script per fare la mappa
function mapFill() {
    var coors = JSON.parse(sessionStorage.getItem('coordinate'));

    var map = L.map('map').setView([Number(coors.lat), Number(coors.lon)], 14);

    var marker = L.marker([Number(coors.lat),Number(coors.lon)]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        zoom: 100,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

//script per prendere coordinate
function getPosizione(indirizzo) {
	fetch(urlHead+indirizzo+urlTail,{method:"GET",headers:{'Content-type': 'application/json'}})
		.then(data => data.json())
		.then(resp => {
		
		    resp.forEach(element => {
		        var coordinate = {
		            lat:element.lat,
		            lon : element.lon,
		        }
		
		        sessionStorage.setItem('coordinate',JSON.stringify(coordinate));
		        mapFill();
		    });
		
		})
}

var calendario = document.querySelector('#calendario');
var btnPrenota = document.querySelector('#btnPrenota');

function CreateCard(url,id,desc,address,link,tipo,alim,dispNol,veicoloCompleto,modello,marca,colore,cilindrata){

  if(url.startsWith('https')){
	  
    document.querySelector('#immagineVeicolo').setAttribute('src',url);
  }else{

    document.querySelector('#immagineVeicolo').setAttribute('src',"../assets/uploads/"+url);
  }

  //document.querySelector('#veicoloIdTitolo').textContent = id;
  document.querySelector('#veicoloId').value = id;
  
  document.querySelector('#modello').innerHTML = "<span>Modello: </span>"+modello;
  document.querySelector('#marca').innerHTML = "<span>Marca: </span>"+marca;
  document.querySelector('#colore').innerHTML = "<span>Colore: </span>"+colore;

  if (cilindrata == -1) {
    document.querySelector('#cilindrata').style.display = "none";
  } else {
    document.querySelector('#cilindrata').innerHTML = "<span>Cilindrata: </span>"+cilindrata;
  }
  
  if (document.querySelector('#button-nav-login') != null)
  	document.querySelector('#button-nav-login').setAttribute('href', "../utenti/login/" + id);
  
  document.querySelector('#bookingForm').setAttribute('action', "../prenotazioni/addPrenotazione/" + id);
  

  document.querySelector('#descrizione').innerHTML = "<span>Descrizione: </span>"+desc;
  
  document.querySelector('#alimentazione').innerHTML = "<span>Alimentazione:  </span>"+alim;

  document.querySelector('#tipologia').innerHTML = "<span>Tipo veicolo:  </span>"+tipo;

  document.querySelector('#disponibilitaNoleggio').innerHTML = "<span>Noleggio:  </span>"+dispNol;

  document.querySelector('#posizione-attuale').innerHTML = "<span>Posizione attuale:  </span>"+address;
  getPosizione(address);
  
  //var calendarioIn = document.createElement('input');
  //calendarioIn.setAttribute('type', 'date');
  //calendarioIn.setAttribute('id', 'datePicker');
  //calendarioIn.setAttribute('name', 'datePicker');
  //calendarioIn.setAttribute('class', 'form-control mx-auto');
  var calendarioIn = document.querySelector('#datePicker');
  calendarioIn.valueAsDate = new Date();
  calendarioIn.setAttribute("min", new Date().toISOString().split("T")[0]);
  //document.querySelector('#mioForm').appendChild(calendarioIn);
  
  //pulsante
  //var buttonLink = document.createElement('button');
  //buttonLink.setAttribute('type', 'submit');
  //buttonLink.classList.add('btn','btn-primary');
  //buttonLink.textContent="Prenota ora";
  var demo = document.querySelector('#demo');
  document.querySelector('#btnPrenota').addEventListener('click', event => {

	 if (isPrenotato(veicoloCompleto)) {
		 demo.textContent = "Veicolo non disponibile in questa data";
		 event.preventDefault();
		 return;
	 } else {
		 
		 if (document.querySelector('#userId').getAttribute('value') == '') {
			demo.innerHTML = "Devi effettuare il login per prenotare il veicolo <br>";
            var buttonLink = document.createElement('a');
            buttonLink.setAttribute('href','../utenti/login/' + id);
            buttonLink.classList.add('btn','btn-secondary', 'btn-sm', 'mt-2');
            buttonLink.textContent="Login";
            demo.appendChild(buttonLink);
		 	event.preventDefault();
		 	return;
		 }
		 
		 localStorage.setItem("faiVedereIlToast", true);
		 
		 /*var userIdLogged = document.querySelector('#userId').getAttribute('value');
		 
		 fetch("http://localhost:9014/api/utenti/" + userIdLogged, {})
		 	.then(data => data.json())
		 	.then(response => setTimeout( () => aggiungiPrenotazione(response, veicoloCompleto)), 500);*/
		 
	 }
  });
  
  //document.querySelector('#mioForm').appendChild(buttonLink);
}
/*
function Prenotazione(id, utente, veicolo, dataPrenotazione){
	this.id = id;
	this.utente = utente;
	this.veicolo = veicolo;
	this.dataPrenotazione = dataPrenotazione;
}

function aggiungiPrenotazione(utente, veicolo) {
	
	fetch("http://localhost:9014/api/prenotazioni", {
		method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(new Prenotazione(null, utente, veicolo, null))
	})
	.then(data => data.json());
}*/

// Create toast instance
var element = document.getElementById("liveToast");
var myToast = new bootstrap.Toast(element);

if (localStorage.getItem("faiVedereIlToast")) {
	
	localStorage.removeItem("faiVedereIlToast");
	myToast.show();
}

function isPrenotato(veicolo) {
	
	var data = document.querySelector('#datePicker').value;
	
    for (var i = 0; i < (veicolo.prenotazioni).length; i++) {
        var dataNoleggio = veicolo.prenotazioni[i].dataPrenotazione.split("T")[0];
        if (dataNoleggio == data) {
            return true;
        } 
    }
    return false;
}

const URL_VEICOLI = "http://localhost:9014/api/veicoli/";

const VEICOLO_ID = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

fetch(URL_VEICOLI + VEICOLO_ID).then(data=>data.json())
.then(resp => {
    CreateCard(resp.immagineVeicolo,resp.id, resp.descrizione,resp.posizioneAttuale,
    '#', resp.tipologia, resp.alimentazione, resp.disponibilitaNoleggio, resp, 
    resp.modello,resp.marca,resp.colore,resp.cilindrata);
      //console.log(resp.immagineVeicolo[0]);
   }
);

/*function dataOggi() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth()+1;
  if (mm < 10) dd="0" + dd;
  var dd = today.getDate();
  if (dd < 10) dd="0" + dd;
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}*/

document.querySelectorAll('.info-auto').forEach(info=> info.classList.add('py-3'));