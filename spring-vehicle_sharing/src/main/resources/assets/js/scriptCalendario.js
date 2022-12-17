getCalendario();

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
            stampaVeicoli(listaVeicoli, "veicoliDisponibili", "veicoliNoleggiati")
            printCard(listaVeicoli, "cardVeicoli");
            printSwiper(listaVeicoli, "swiperVeicoli");
        })
}

function stampaVeicoli(listaVeicoli, tabella1, tabella2) {
    for (const veicolo of listaVeicoli) {
        if (veicolo.disponibilitaNoleggio == "true") {
            riempiTabella(veicolo, tabella1);
        } else {
            riempiTabella(veicolo, tabella2);
        }
    }
}

function riempiTabella(veicolo, tabella) {

    var tbody = document.getElementById(tabella);
    
    var tr = document.createElement("tr");
    var td = document.createElement("td");

    td.innerHTML = "<h5>" + veicolo.veicoloId + "</h5><ul>" +
                   "<li>" + veicolo.tipologia + "</li>" +
                   "<li>" + veicolo.descrizione + "</li>" +
                   "<li>" + veicolo.posizioneAttuale + "</li><ul>";

    tr.appendChild(td);
    tbody.appendChild(tr);

}

function printCard(listaVeicoli, div) {

    var cardDiv = document.getElementById(div);
    cardDiv.innerHTML = "<h4>Veicoli disponibili</h4>";

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    cardDiv.appendChild(row);

    for (const veicolo of listaVeicoli) {

        // if (veicolo.disponibilitaNoleggio == "true") {

        var col = document.createElement("div");
        col.setAttribute("class", "col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch")
        row.appendChild(col);

        // card
        var card = document.createElement("div");
        card.setAttribute("class", "card mt-3");
        col.appendChild(card);
        
        // card image
        var cardImg = document.createElement("img");
        if (veicolo.tipologia == "Auto") {
            // cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("src", "https://source.unsplash.com/600x400?car");
        } else if (veicolo.tipologia == "Bicicletta") {
            // cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("src", "https://source.unsplash.com/600x400?bicycle");
        } else {
            // cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("src", "https://source.unsplash.com/600x400?scooter");
        }
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
        
        // }

    }

}

function printSwiper(listaVeicoli, div) {

    var swiperDiv = document.getElementById(div);

    for (const veicolo of listaVeicoli) {

        // if (veicolo.disponibilitaNoleggio == "true") {

        var swiper = document.createElement("div");
        swiper.setAttribute("class", "swiper-slide");
        swiperDiv.appendChild(swiper);

        // card
        var card = document.createElement("div");
        card.setAttribute("class", "card");
        swiper.appendChild(card);
        
        // card image
        var cardImg = document.createElement("img");
        if (veicolo.tipologia == "Auto") {
            // cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("src", "https://source.unsplash.com/600x400?car");
        } else if (veicolo.tipologia == "Bicicletta") {
            // cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("src", "https://source.unsplash.com/600x400?bicycle");
        } else {
            // cardImg.setAttribute("src", veicolo.immagineVeicolo);
            cardImg.setAttribute("src", "https://source.unsplash.com/600x400?scooter");
        }
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

        // }

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