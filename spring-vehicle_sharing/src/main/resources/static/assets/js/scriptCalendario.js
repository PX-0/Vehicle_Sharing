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
    // const VEICOLI_URL = "/api/veicoli";
    const VEICOLI_URL = "http://localhost:3000/veicoli";
    
    fetch(VEICOLI_URL)
    .then(response => {
            return response.json();
        })
        .then(listaVeicoli => {
            // printDisponibili(listaVeicoli, "veicoliDisponibili");
            // printNoleggiati(listaVeicoli, "veicoliNoleggiati");
            stampaVeicoli(listaVeicoli, "veicoliDisponibili", "veicoliNoleggiati");
            // printCard(listaVeicoli, "cardVeicoli");
            // printSwiper(listaVeicoli, "swiperVeicoli");
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
    for (const veicolo of listaVeicoli) {
        if (!isPrenotato(veicolo, dataOggi())) {
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

function printCard(listaVeicoli, div) {

    var cardDiv = document.getElementById(div);
    cardDiv.innerHTML = "<h4>Veicoli disponibili</h4>";

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    cardDiv.appendChild(row);

    for (const veicolo of listaVeicoli) {

        if (veicolo.disponibilitaNoleggio == "true") {

            var col = document.createElement("div");
            col.setAttribute("class", "col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch")
            row.appendChild(col);

            // card
            var card = document.createElement("div");
            card.setAttribute("class", "card mt-3");
            col.appendChild(card);
            
            // card image
            var cardImg = document.createElement("img");
            cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("class", "card-img-top");
            card.appendChild(cardImg);
            
            // card body
            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            card.appendChild(cardBody);
            
            // card title
            var cardTitle = document.createElement("div");
            cardTitle.setAttribute("class", "card-title fs-5");
            cardTitle.innerHTML = "<h5>" + veicolo.veicoloId + "</h5>";
            cardBody.appendChild(cardTitle);

            // card text
            var cardText = document.createElement("p");
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = "<ul><li>" + veicolo.tipologia + "</li>" +
                                     "<li>" + veicolo.descrizione + "</li>" +
                                     "<li>" + veicolo.posizioneAttuale + "</li></ul>";
            cardBody.appendChild(cardText);
        
        }

    }

}

function printSwiper(listaVeicoli, div) {

    var swiperDiv = document.getElementById(div);

    for (const veicolo of listaVeicoli) {

        if (veicolo.disponibilitaNoleggio == "true") {

            var swiper = document.createElement("div");
            swiper.setAttribute("class", "swiper-slide");
            swiperDiv.appendChild(swiper);

            // card
            var card = document.createElement("div");
            card.setAttribute("class", "card");
            swiper.appendChild(card);
            
            // card image
            var cardImg = document.createElement("img");
            cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("class", "card-img-top");
            card.appendChild(cardImg);
            
            // card body
            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            card.appendChild(cardBody);
            
            // card title
            var cardTitle = document.createElement("div");
            cardTitle.setAttribute("class", "card-title fs-5");
            cardTitle.innerHTML = "<h5>" + veicolo.veicoloId + "</h5>";
            cardBody.appendChild(cardTitle);

            // card text
            var cardText = document.createElement("p");
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = "<ul><li>" + veicolo.tipologia + "</li>" +
                                     "<li>" + veicolo.descrizione + "</li>" +
                                     "<li>" + veicolo.posizioneAttuale + "</li></ul>";
            cardBody.appendChild(cardText);

        }

    }

}

// function printDisponibili(listaVeicoli, tabella) {

//     var tbody = document.getElementById(tabella);

//     for (const veicolo of listaVeicoli) {
        
//         if (veicolo.disponibilitaNoleggio == "true") {

//             var tr = document.createElement("tr");
//             var td = document.createElement("td");

//             td.innerHTML = "<h5>" + veicolo.veicoloId + "</h5><ul>" +
//                            "<li>" + veicolo.tipologia + "</li>" +
//                            "<li>" + veicolo.descrizione + "</li>" +
//                            "<li>" + veicolo.posizioneAttuale + "</li><ul>";

//             tr.appendChild(td);
//             tbody.appendChild(tr);

//         } 

//     }

// }

// function printNoleggiati(listaVeicoli, tabella) {

//     var tbody = document.getElementById(tabella);

//     for (const veicolo of listaVeicoli) {
        
//         if (veicolo.disponibilitaNoleggio != "true") {

//             var tr = document.createElement("tr");
//             var td = document.createElement("td");

//             td.innerHTML = "<h5>" + veicolo.veicoloId + "</h5><ul>" +
//                            "<li>" + veicolo.tipologia + "</li>" +
//                            "<li>" + veicolo.descrizione + "</li>" +
//                            "<li>" + veicolo.posizioneAttuale + "</li><ul>";

//             tr.appendChild(td);
//             tbody.appendChild(tr);

//         } 

//     }

// }