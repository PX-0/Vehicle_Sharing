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

/* -------------------------------------------------------------------------- */
/*                              SCRIPT CALENDARIO                             */
/* -------------------------------------------------------------------------- */

var calendario = document.getElementById("datePicker");
calendario.addEventListener("change", getCalendario);
document.getElementById("datePicker").valueAsDate = new Date();

getCalendario();

function getCalendario() {
    const VEICOLI_URL = "/api/veicoli";
    
    fetch(VEICOLI_URL)
    .then(response => {
            return response.json();
        })
        .then(listaVeicoli => {
            stampaVeicoli(listaVeicoli, "veicoliDisponibili", "veicoliNoleggiati");
        })
}
    
function isPrenotato(veicolo, data) {
    for (var i = 0; i < (veicolo.prenotazioni).length; i++) {
        var dataNoleggio = veicolo.prenotazioni[i].dataPrenotazione.split("T")[0];
        if (dataNoleggio == data) {
            return true;
        } 
    }
    return false;
}

function stampaVeicoli(listaVeicoli, tabella1, tabella2) {
	
	var tbody1 = document.getElementById(tabella1);
	tbody1.innerHTML = "";
	var tbody2 = document.getElementById(tabella2);
	tbody2.innerHTML = "";

    for (const veicolo of listaVeicoli) {
        if (!isPrenotato(veicolo, calendario.value)) {
            riempiTabella(veicolo, tabella1);
        } else {
            riempiTabella(veicolo, tabella2);
        }
    }
}

function riempiTabella(veicolo, tabella) {

    if (veicolo.disponibilitaNoleggio == "true") {

        var tbody = document.getElementById(tabella);
        
        var tr = document.createElement("tr");
        var td = document.createElement("td");

        td.innerHTML = "<h5>" + veicolo.veicoloId + "</h5><ul>" +
                        "<li>" + veicolo.tipologia + "</li>" +
                        "<li>" + veicolo.descrizione + "</li>" +
                        "<li>" + veicolo.posizioneAttuale + "</li></ul>";

        if (veicolo.prenotazioni.length >= 1) {
            td.innerHTML += "<p>Veicolo prenotato per i giorni:</p>";
            var ul = document.createElement("ul");
            td.appendChild(ul);
            for (var i = 0; i < veicolo.prenotazioni.length; i++) {
                ul.innerHTML += "<li>" + veicolo.prenotazioni[i].dataPrenotazione.split("T")[0] + "</li>";
            }
        }

        td.innerHTML += "<button type='button' class='btn btn-primary'>Ulteriori informazioni</button>";
        
        tr.appendChild(td);
        tbody.appendChild(tr);

    }

}

/* -------------------------------------------------------------------------- */
/*                           FINE SCRIPT CALENDARIO                           */
/* -------------------------------------------------------------------------- */

const swiperBox = document.querySelector('#swiper-box');

const url = "http://localhost:9014/api/veicoli";
/* ------------------------------ end function ------------------------------ */

function CreateCard(url,title,desc,address,link){
  //creo swiper-slide
  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  //inizio a creare la card

  var card = document.createElement('div');
  card.classList.add('card');

  //immagine
  var img = document.createElement('img');
  img.setAttribute('src',url);
  img.classList.add('card-img-top');

  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  var cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;

  //testo della card
  var cardText = document.createElement('div');
  cardText.classList.add('card-text');

  var descrizione = document.createElement('p');
  descrizione.setAttribute('id','descrizione');
  descrizione.textContent=desc;

  var posizioneAttuale = document.createElement('p');
  posizioneAttuale.setAttribute('id','posizione-attuale');
  posizioneAttuale.textContent=address;

  cardText.appendChild(descrizione);
  cardText.appendChild(posizioneAttuale);

  //pulsante
  var buttonLink = document.createElement('a');
  buttonLink.classList.add('btn','btn-primary');
  buttonLink.setAttribute('href',link);
  buttonLink.textContent="Maggiori Info";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(buttonLink);

  card.appendChild(img);
  card.appendChild(cardBody);

  swiperSlide.appendChild(card);

  swiperBox.appendChild(swiperSlide);
}





fetch(url).then(data=>{return data.json()})
.then(resp=>{
      resp.forEach(element => {
        CreateCard(element.immagineVeicolo,element.veicoloId,
          element.descrizione,element.posizioneAttuale,'#')

      });

})