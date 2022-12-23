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

  printPlaceholderCard((disponibili - noleggiati), tabella2);

}

function riempiTabella(veicolo, tabella) {

    if (veicolo.disponibilitaNoleggio != "No") {

        var tbody = document.getElementById(tabella);
        
        var tr = document.createElement("tr");
        tr.setAttribute("style", "height: 25rem;");
        tbody.appendChild(tr);
        
        var td = document.createElement("td");
        td.setAttribute("class", "px-2 px-lg-4 py-3 py-sm-0");
        tr.appendChild(td);

        td.innerHTML = "<h3>" + veicolo.marca + " " + veicolo.modello + "</h3>";
        td.innerHTML += "<p>Dettagli:</p>";

        var divOverflow = document.createElement("div");
        divOverflow.setAttribute("class", "div-overflow rounded border bg-white py-2 ps-3 ps-sm-4 pe-3");
        td.appendChild(divOverflow);

        var ulVeicolo = document.createElement("ul");
        divOverflow.appendChild(ulVeicolo);

        ulVeicolo.innerHTML = "<li>" + "Tipologia: " + veicolo.tipologia + "</li>" +
                              "<li>" + veicolo.descrizione + "</li>" +
                              "<li>" + "Posizione attuale: <br> " + veicolo.posizioneAttuale + "</li>";

         var row = document.createElement("div");
         row.setAttribute("class", "row align-items-center justify-content-evenly py-4 pb-md-0")
         td.appendChild(row);

         var col1 = document.createElement("div");
         col1.setAttribute("class", "text-center col-12 col-md-6 col-xl-4 pb-2 pb-md-0")
         row.appendChild(col1);

         var col2 = document.createElement("div");
         col2.setAttribute("class", "text-center col-12 col-md-6 col-xl-4")
         row.appendChild(col2);
         
         var p = document.createElement("div");
         p.setAttribute("class", "col-12");
         divOverflow.appendChild(p);

        if (veicolo.prenotazioni.length >= 1) {

          p.innerHTML = "Veicolo prenotato per i giorni:";

          var ulPrenotazioni = document.createElement("ul");
          ulPrenotazioni.setAttribute("class", "pb-0 mb-0")
          p.appendChild(ulPrenotazioni);

          for (var i = 0; i < veicolo.prenotazioni.length; i++) {
            var li = document.createElement("li");
            ulPrenotazioni.appendChild(li);
            li.innerHTML = veicolo.prenotazioni[i].dataPrenotazione.split("T")[0];
          }
          
        }
        
        if (!isPrenotato(veicolo, calendario.value)) {
          col1.classList.add("text-secondary");
          col1.innerHTML = "<b>Veicolo disponibile</b>";
          col2.innerHTML = "<a href='veicoli/"+ veicolo.id  + "' type='button' class='btn btn-primary'>Prenota ora</button>";        
        } else {
          col1.classList.add("text-danger");
          col1.innerHTML = "<b>Veicolo occupato</b>";
          col2.innerHTML = "<a href='veicoli/"+ veicolo.id  + "' type='button' class='btn btn-secondary'>Info veicolo</button>";        
        }
  
    }

}

function printPlaceholderCard(n, tabella) {

  var tbody = document.getElementById(tabella);

  for (var i = 0; i < n; i++) {
    
    var tr = document.createElement("tr");
    tr.setAttribute("class", "tr-fixed");
    tbody.appendChild(tr);
    
    var td = document.createElement("td");
    td.setAttribute("class", "px-3 px-md-4");
    tr.appendChild(td);

    // card
    var card = document.createElement("div");
    card.setAttribute("class", "card col-12 col-lg-9");
    td.appendChild(card);
    
    // // card image
    // var cardImg = document.createElement("img");
    // cardImg.setAttribute("src", "../assets/img/elementor-placeholder-image.jpg");
    // cardImg.setAttribute("class", "card-img-top");
    // card.appendChild(cardImg);
    
    // card body
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body p-3 p-md-4");
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
    cardBtn.setAttribute("class", "btn btn-secondary disabled placeholder col-4 col-sm-6 col-lg-5 float-center float-md-end");
    cardBody.appendChild(cardBtn);

  }

}

/* ----------------------------- FINE CALENDARIO ---------------------------- */

const swiperBox = document.querySelector('#swiper-box');

const url = "http://localhost:9014/api/veicoli";
/* ------------------------------ end function ------------------------------ */

function CreateCard(url,marca,desc,cc,alimentazione,link){
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
  if(url.startsWith('https')){
    img.setAttribute('src',"https://source.unsplash.com/300x400/?logo-"+marca);
  }else{
    img.setAttribute('src',"../assets/uploads/"+url);
  }
  img.classList.add('card-img-top',"img-fluid");
  div.appendChild(img);
  card.appendChild(div)

  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  var cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = marca;

  //testo della card
  var cardText = document.createElement('div');
  cardText.classList.add('card-text');

  // var descrizione = document.createElement('p');
  // descrizione.textContent=desc;
  // cardText.appendChild(descrizione);

  var tipoAlimentazione = document.createElement('p');
  tipoAlimentazione.textContent= alimentazione;

  cardText.appendChild(tipoAlimentazione);

  if(cc != "-1"){
    var cilindrata = document.createElement('p');
    cilindrata.setAttribute('id','cilindrata');
    cilindrata.textContent=cc;
    cardText.appendChild(cilindrata);
  }else{
    var br = document.createElement('br');
    var br2 = document.createElement('br');
    cardText.appendChild(br);
    cardText.appendChild(br2);
  }



  //pulsante
  var buttonLink = document.createElement('a');
  buttonLink.classList.add('btn','btn-primary');
  buttonLink.setAttribute('href',link)
  buttonLink.textContent="Ulteriori informazioni";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(buttonLink);

  // card.appendChild(img);
  card.appendChild(cardBody);

  swiperSlide.appendChild(card);

  swiperBox.appendChild(swiperSlide);
}





fetch(url).then(data=>{return data.json()})
.then(resp=>{
      resp.forEach(element => {
        CreateCard(
          element.immagineVeicolo,
          element.marca,
          element.descrizione,
          element.cilindrata,
          element.alimentazione,
          'veicoli/'+element.id)

      });

})