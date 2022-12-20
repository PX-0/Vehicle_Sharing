const urlHead = "https://nominatim.openstreetmap.org/search.php?q=";
const urlTail = "&format=json&limit=1";

//script per fare la mappa
function mapFill() {
    var coors = JSON.parse(sessionStorage.getItem('coordinate'));

    var map = L.map('map').setView([Number(coors.lat), Number(coors.lon)], 8);

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

function CreateCard(url,title,desc,address,link,tipo,alim,dispNol){

  if(url.startsWith('https')){
	  
    document.querySelector('#immagineVeicolo').setAttribute('src',url);
  }else{

    document.querySelector('#immagineVeicolo').setAttribute('src',"../assets/uploads/"+url);
  }

  document.querySelector('#veicoloId').textContent = title;

  document.querySelector('#descrizione').textContent = desc;
  
  document.querySelector('#alimentazione').textContent = alim;

  document.querySelector('#tipologia').textContent = tipo;

  document.querySelector('#disponibilitaNoleggio').textContent = dispNol;

  document.querySelector('#posizione-attuale').textContent = address;
  getPosizione(address);
  
  var calendarioIn = document.createElement('input');
  calendarioIn.setAttribute('type', 'date');
  calendarioIn.setAttribute('id', 'datePicker');
  calendarioIn.setAttribute('class', 'form-control mx-auto');
  calendarioIn.valueAsDate = new Date();
  calendarioIn.setAttribute("min", dataOggi());
  
  calendario.appendChild(calendarioIn);
  
  //pulsante
  var buttonLink = document.createElement('a');
  buttonLink.classList.add('btn','btn-primary');
  buttonLink.textContent="Prenota ora";
  
  buttonLink.addEventListener('click', () => {
	 
	 if (isPrenotato()) {
		 
	 } else {
		 document.querySelector('#demo').textContent = "NO";
	 }
	  
  });
  
  btnPrenota.appendChild(buttonLink);
}

function isPrenotato() {
	
	var veicolo = document.querySelector('#veicoloId').textContent;
	var dataNoleggio = document.querySelector('#datePicker').value;
	
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
    CreateCard(resp.immagineVeicolo,resp.veicoloId, resp.descrizione,resp.posizioneAttuale,
    '#', resp.tipologia, resp.alimentazione, resp.disponibilitaNoleggio);
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