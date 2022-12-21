var USER_SESSION_DATA = document.querySelector("#user-session-data");
sessionStorage.setItem('utente_sd', USER_SESSION_DATA);

if (sessionStorage.getItem('utente_sd').tipo != "B"&&sessionStorage.getItem('utente_sd').tipo != "A" ) {
    document.querySelector("#button-nav").textContent = "Login";
    document.querySelector("#button-nav").setAttribute('href', "./utenti/login");
}
else {
    document.querySelector("#button-nav").textContent = "Logout";
    document.querySelector("#button-nav").setAttribute('href', "./utenti/logout");
}
console.log(sessionStorage.getItem('utente_sd').tipo);