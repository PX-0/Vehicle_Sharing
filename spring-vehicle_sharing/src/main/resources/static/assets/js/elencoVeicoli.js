const URL_VEICOLI = "http://localhost:9014/api/veicoli";

var elencoVeicoli = [];

fetch(URL_VEICOLI, {})
.then(data => data.json())
.then(response => {
    elencoVeicoli.push(response);
});

console.log(elencoVeicoli);