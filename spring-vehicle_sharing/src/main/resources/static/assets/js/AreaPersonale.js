const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 10
      },

      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 10
      }

    },

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
const userData = document.querySelector('#user-session-data').textContent;
const sectionPrenotazioni = document.querySelector('#prenotazioni-utente');

const swiperBox = document.querySelector('#swiper-box');

const urlVeicoli= "http://localhost:9014/api/prenotazioniByUtente/";

var infoUser = userData.split(',');



/* ----------------------------- END CONSTs&VARs ---------------------------- */

async function requestGetVeicoli(){
    var response = await fetch(urlVeicoli+infoUser[2])
    var data = await response.json();
    if(data != undefined){
      var h2 = document.createElement('h2');
      h2.textContent = "LE TUE PRENOTAZIONI";
      sectionPrenotazioni.appendChild(h2);
      data.forEach(element=>
          CreateCard(
              element.veicolo.immagineVeicolo,
              element.dataPrenotazione,
              element.veicolo.posizioneAttuale)
      
      )
        }
}

/* --------------------------------- END ASYNCS --------------------------------- */
function getDataFormattata(data) {

    var date = data.split("T");

    const array = date[0].split('-');

    return `${array[2]}/${array[1]}/${array[0]}`;

}

function CreateCard(url,data,posizione){

    //creo swiper-slide
    var swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
  
    //inizio a creare la card
    var card = document.createElement('div');
    card.classList.add('card');

    //immagine
    var img = document.createElement('img');
    img.classList.add('card-img-top');
    if(url.startsWith('http')){
        img.setAttribute('src',url);
        
      }else if(url==null){
        
        img.setAttribute('src',"../uploads/elementor-placeholder-image.jpg");
        
      }else{
        img.setAttribute('src',"../assets/uploads/"+url);
      }

    card.appendChild(img)
    
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    var cardText = document.createElement('div');
    cardText.classList.add('card-text','text-center');

    var dataPrenotazione = document.createElement('p');
    dataPrenotazione.textContent= "Prenatata il: "+ getDataFormattata(data);
    
    var luogo = document.createElement('p');
    luogo.textContent= "Si trova in: "+posizione;

    cardText.appendChild(dataPrenotazione);
    cardText.appendChild(luogo);

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
    }else{
        welcome = "BENVENUTO"
    }
    h1.textContent = welcome+" "+infoUser[0]+" "+ infoUser[1]

    titleAreaPersonale.appendChild(h1);
}
/* ------------------------------ END FUNCTIONs ----------------------------- */

requestGetVeicoli();
createWelcome();