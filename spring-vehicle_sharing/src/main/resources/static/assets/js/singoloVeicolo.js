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
  
  document.querySelector('#modello').textContent = modello;
  document.querySelector('#marca').textContent = marca;
  document.querySelector('#colore').textContent = colore;
  document.querySelector('#cilindrata').textContent = cilindrata;
  
  if (document.querySelector('#button-nav-login') != null)
  	document.querySelector('#button-nav-login').setAttribute('href', "../utenti/login/" + id);
  
  document.querySelector('#mioForm').setAttribute('action', "../prenotazioni/addPrenotazione/" + id);
  

  document.querySelector('#descrizione').textContent = desc;
  
  document.querySelector('#alimentazione').textContent = alim;

  document.querySelector('#tipologia').textContent = tipo;

  document.querySelector('#disponibilitaNoleggio').textContent = dispNol;

  document.querySelector('#posizione-attuale').textContent = address;
  getPosizione(address);
  
  //var calendarioIn = document.createElement('input');
  //calendarioIn.setAttribute('type', 'date');
  //calendarioIn.setAttribute('id', 'datePicker');
  //calendarioIn.setAttribute('name', 'datePicker');
  //calendarioIn.setAttribute('class', 'form-control mx-auto');
  var calendarioIn = document.querySelector('#datePicker');
  calendarioIn.valueAsDate = new Date();
  calendarioIn.setAttribute("min", dataOggi());
  
  //document.querySelector('#mioForm').appendChild(calendarioIn);
  
  //pulsante
  //var buttonLink = document.createElement('button');
  //buttonLink.setAttribute('type', 'submit');
  //buttonLink.classList.add('btn','btn-primary');
  //buttonLink.textContent="Prenota ora";
  var demo = document.querySelector('#demo');
  document.querySelector('#btnPrenota').addEventListener('click', event => {
  document.querySelector('#prenSuccess').innerHTML = '';
	 if (isPrenotato(veicoloCompleto)) {
		 demo.textContent = "Veicolo non disponibile in questa data";
		 event.preventDefault();
		 return;
	 } else {
		 
		 if (document.querySelector('#userId').getAttribute('value') == '') {
			demo.textContent = "Devi effettuare il login per prenotare il veicolo";
            var buttonLink = document.createElement('a');
            buttonLink.setAttribute('href','../utenti/login/' + id);
            buttonLink.classList.add('btn','btn-secondary');
            buttonLink.textContent="Login";
            demo.appendChild(buttonLink);
		 	event.preventDefault();
		 	return;
		 }
		 
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