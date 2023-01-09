const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const titleAreaPersonale = document.querySelector('#hello-utente');
const messaggioNotBooking = document.querySelector('#msg-NotBooking');
const sectionTitlePrenotazioni = document.querySelector('#prenotazioni-utente');
const userData = document.querySelector('#user-session-data').textContent;

const swiperBox = document.querySelector('#swiper-box');

const urlVeicoli = "http://localhost:9014/api/prenotazioniByUtente/";

var infoUser = userData.split(',');



/* ----------------------------- END CONSTs&VARs ---------------------------- */

async function requestGetVeicoli() {
  var response = await fetch(urlVeicoli + infoUser[2])
  var data = await response.json();
  console.log(data);
  if (data.length !=0) {
    var h2 = document.createElement('h2');
    h2.textContent = "LE TUE PRENOTAZIONI";
    sectionTitlePrenotazioni.appendChild(h2);
    data.forEach(element =>
      CreateCard(
        element.veicolo.immagineVeicolo,
        element.dataPrenotazione,
        element.veicolo.posizioneAttuale,
        element.id)

    )
  } else {
    var msgError = document.createElement('h2');
    msgError.textContent = "CI DISPIACE, NON ABBIAMO TROVATO PRENOTAZIONI A SUO NOME";
    messaggioNotBooking.appendChild(msgError);
  }
}

/* --------------------------------- END ASYNCS --------------------------------- */
function getDataFormattata(data) {

  var date = data.split("T");

  const array = date[0].split('-');

  return `${array[2]}/${array[1]}/${array[0]}`;

}

function CreateCard(url, data, posizione, id) {

  //creo swiper-slide
  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  //inizio a creare la card
  var card = document.createElement('div');
  card.classList.add('card');

  //immagine
  var div = document.createElement('div');
  div.classList.add('img-fx');
  var img = document.createElement('img');
  img.classList.add('card-img-top');
  if (url.startsWith('http')) {
    img.setAttribute('src', url);

  } else if (url == null) {

    img.setAttribute('src', "../uploads/elementor-placeholder-image.jpg");

  } else {
    img.setAttribute('src', "../assets/uploads/" + url);
  }
  div.appendChild(img)
  card.appendChild(div)

  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  var cardText = document.createElement('div');
  cardText.classList.add('card-text', 'text-center');

  var dataPrenotazione = document.createElement('p');
  dataPrenotazione.textContent = "Prenotata per il: " + getDataFormattata(data);

  var luogo = document.createElement('p');
  luogo.textContent = "Si trova in: " + posizione;

  cardText.appendChild(dataPrenotazione);
  cardText.appendChild(luogo);
  
  //modal per delete
  const BUTTON = document.createElement('button');
  BUTTON.setAttribute('type', 'button');
  BUTTON.classList.add('btn', 'btn-danger');
  BUTTON.textContent = "Annulla"
  BUTTON.addEventListener('click', () => {
	 
	var old_element = document.getElementById("modalBtnDelete");
	var new_element = old_element.cloneNode(true);
	old_element.parentNode.replaceChild(new_element, old_element);
	
	myModal.show();
	
	document.querySelector('#modalBtnDelete').addEventListener('click', () => {
		
		fetch(`http://localhost:9014/api/prenotazioni/${id}`, {
			method: 'DELETE',
		})
			.then(data => data.json())
			.then(response => console.log(response));
			setTimeout(() => {
					localStorage.setItem("faiVedereIlToast", true);
					location.reload();
				}, 1000);
	}); 
  });
  cardText.appendChild(BUTTON);

  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  swiperSlide.appendChild(card);

  swiperBox.appendChild(swiperSlide);
}





function createWelcome() {
  var h1 = document.createElement('h1');
  var welcome;
  if (infoUser[0].endsWith("a")) {
    welcome = "BENVENUTA"
  } else {
    welcome = "BENVENUTO"
  }
  h1.textContent = welcome + " " + infoUser[0] + " " + infoUser[1]

  titleAreaPersonale.appendChild(h1);
}
/* ------------------------------ END FUNCTIONs ----------------------------- */

requestGetVeicoli();
createWelcome();

// modal e toast

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