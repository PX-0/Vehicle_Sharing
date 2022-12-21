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
/*                                 CALENDARIO                                 */
/* -------------------------------------------------------------------------- */

var calendario = document.getElementById("datePicker");
calendario.addEventListener("change", getCalendario);
document.getElementById("datePicker").valueAsDate = new Date();
document.getElementById("datePicker").setAttribute("min", dataOggi());

getCalendario();

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

  var disponibili = 0;
  var noleggiati = 0;

  for (const veicolo of listaVeicoli) {
    if (!isPrenotato(veicolo, calendario.value)) {
      riempiTabella(veicolo, tabella1);
      if (veicolo.disponibilitaNoleggio != "No") {
        disponibili++;
      }
    } else {
      riempiTabella(veicolo, tabella2);
      if (veicolo.disponibilitaNoleggio != "No") {
        noleggiati++;
      }
    }
  }

  // var tab1 = document.getElementById("tabellaDisponibili");
  // var tab2 = document.getElementById("tabellaNoleggiati");

  // if (noleggiati != 0) {
  //   printPlaceholderCard((disponibili - noleggiati), tabella2);
  //   tab1.setAttribute("class", "col-6");
  //   tab2.removeAttribute("hidden");

  // } else {
  //   tab1.setAttribute("class", "col-12");
  //   tab2.setAttribute("hidden", "");
  // }

  printPlaceholderCard((disponibili - noleggiati), tabella2);

}

function riempiTabella(veicolo, tabella) {

    if (veicolo.disponibilitaNoleggio != "No") {

        var tbody = document.getElementById(tabella);
        
        var tr = document.createElement("tr");
        tr.setAttribute("class", "tr-veicoli");
        tbody.appendChild(tr);
        
        var td = document.createElement("td");
        td.setAttribute("class", "ps-4 py-3 py-sm-0");
        tr.appendChild(td);

        td.innerHTML = "<h3>" + veicolo.veicoloId + "</h3><ul>" +
                       "<li>" + veicolo.tipologia + "</li>" +
                       "<li>" + veicolo.descrizione + "</li>" +
                       "<li>" + veicolo.posizioneAttuale + "</li></ul>";

         var row = document.createElement("div");
         row.setAttribute("class", "row align-items-center")
         td.appendChild(row);

         var col1 = document.createElement("div");
         col1.setAttribute("class", "col-12 col-md-6 mb-2")
         row.appendChild(col1);

         var col2 = document.createElement("div");
         col2.setAttribute("class", "col-12 col-md-6")
         row.appendChild(col2);

        if (veicolo.prenotazioni.length >= 1) {

          var p = document.createElement("div");
          p.setAttribute("class", "col-12");
          col1.appendChild(p);
          p.textContent = "Veicolo prenotato per i giorni:";

          var ul = document.createElement("ul");
          ul.setAttribute("class", "pb-0 mb-0")
          col1.appendChild(ul);

          for (var i = 0; i < veicolo.prenotazioni.length; i++) {
              ul.innerHTML += "<li>" + veicolo.prenotazioni[i].dataPrenotazione.split("T")[0] + "</li>";
          }

          col2.innerHTML = "<button type='button' class='btn btn-primary'>Ulteriori informazioni</button>";

        } else {

          col1.innerHTML = "<div>Veicolo disponibile</div>";
          col2.innerHTML = "<button type='button' class='btn btn-primary'>Ulteriori informazioni</button>";        
        
        }
  
    }

}

function printPlaceholderCard(n, tabella) {

  var tbody = document.getElementById(tabella);

  for (var i = 0; i < n; i++) {
    
    var tr = document.createElement("tr");
    tr.setAttribute("class", "tr-veicoli");
    tbody.appendChild(tr);
    
    var td = document.createElement("td");
    tr.appendChild(td);

    // card
    var card = document.createElement("div");
    card.setAttribute("class", "card col-12 col-lg-9 my-3 my-lg-2");
    td.appendChild(card);
    
    // // card image
    // var cardImg = document.createElement("img");
    // cardImg.setAttribute("src", "../assets/img/elementor-placeholder-image.jpg");
    // cardImg.setAttribute("class", "card-img-top");
    // card.appendChild(cardImg);
    
    // card body
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body p-2 p-sm-3 p-md-4");
    card.appendChild(cardBody);
    
    // card title
    var cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title text-start");
    // cardTitle.setAttribute("class", "card-title placeholder-glow text-start");
    cardTitle.innerHTML = "Slot libero";
    cardBody.appendChild(cardTitle);

    // // card title - placeholder
    // var titlePlaceholder = document.createElement("span");
    // titlePlaceholder.setAttribute("class", "placeholder col-6 col-lg-4");
    // cardTitle.appendChild(titlePlaceholder);

    // card text
    var cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text placeholder-glow text-start");
    cardBody.appendChild(cardText);

    // card text - placeholder
    var textPlaceholder1 = document.createElement("span");
    var textPlaceholder2 = document.createElement("span");
    var textPlaceholder3 = document.createElement("span");
    var textPlaceholder4 = document.createElement("span");
    var textPlaceholder5 = document.createElement("span");
    textPlaceholder1.setAttribute("class", "placeholder col-8 mx-1");
    textPlaceholder2.setAttribute("class", "placeholder col-5 mx-1");
    textPlaceholder3.setAttribute("class", "placeholder col-4 mx-1");
    textPlaceholder4.setAttribute("class", "placeholder col-4 mx-1");
    textPlaceholder5.setAttribute("class", "placeholder col-3 mx-1");
    cardText.appendChild(textPlaceholder1);
    cardText.appendChild(textPlaceholder2);
    cardText.appendChild(textPlaceholder3);
    cardText.appendChild(textPlaceholder4);
    cardText.appendChild(textPlaceholder5);
    
    // card button
    var cardBtn = document.createElement("a");
    cardBtn.setAttribute("class", "btn btn-primary disabled placeholder col-10 col-sm-10 col-md-8 col-lg-6 float-end");
    cardBody.appendChild(cardBtn);

  }

}

/* ----------------------------- FINE CALENDARIO ---------------------------- */

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
  if(url.startsWith('https')){
    img.setAttribute('src',url);
  }else{
    img.setAttribute('src',"../assets/uploads/"+url);
  }
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
  buttonLink.setAttribute('href',link)
  buttonLink.textContent="Ulteriori informazioni";

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
          element.descrizione,element.posizioneAttuale,'veicoli/'+element.veicoloId)
          // console.log(element.immagineVeicolo[0]);

      });

})