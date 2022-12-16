getCalendario();

function getCalendario() {
    const VEICOLI_URL = "/api/veicoli";

    fetch(VEICOLI_URL)
        .then(response => {
            return response.json();
        })
        .then(listaVeicoli => {
            printTable(listaVeicoli, "calendario");
            console.log(listaVeicoli());
        })
}

function printTable(listaVeicoli, calendario) {

    var tbody = document.querySelector(calendario);
    tbody.textContent = "";

    for (const veicolo in listaVeicoli) {

        var tr = document.createElement("tr");

        for (const key in veicolo) {

            if (key != "id") {

                if (Object.hasOwnProperty.call(veicolo, key)) {
                    const element = veicolo[key];
                    var td = document.createElement("td");
                    td.textContent = element;
                    tr.appendChild(td);
                }

            }

        }

        tbody.appendChild(tr);

    }

}