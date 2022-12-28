// indirizzo che contiene gli utenti / dove salvare i nuovi utenti con fetch post
const USER_URL = "http://localhost:3000/user";

// recupero l'utente creato in registrazione dal localStorage e (se esiste) il tweet inviato prima del (ri)caricamento della pagina
var localUser = JSON.parse(localStorage.getItem("log"));
var localPrevTweet = JSON.parse(localStorage.getItem("prevTweet"));

// visualizzo i dati dell'utente corrente
var currentUser = document.querySelector("#currentUser");
currentUser.innerHTML = "@" + localUser.username + "<img class='avatar' src='" + localUser.avatar + "'>";

// recupero i vari elementi del form
var tweet = document.querySelector("#tweet");
var tweetCheck = document.querySelector("#tweetCheck");

var prevTweet = document.querySelector("#prevTweet");

var tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit", addTweet);

var logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("submit", logout);

// al caricamento della pagina mostra (se esiste) il tweet inviato prima del (ri)caricamento della pagina
stampaTweet();

// indica l'orario corrente
function getTime() {
    var now = new Date();
    var ora = (now.getHours() < 10 ? "0": "") + now.getHours();
    var min = (now.getMinutes() < 10 ? "0": "") + now.getMinutes();
    var sec = (now.getSeconds() < 10 ? "0": "") + now.getSeconds();
    var orario = ora + ":" + min + ":" + sec;
    return orario;
}

function Tweet(tweet, orarioTweet) {
    this.tweet = tweet;
    this.orarioTweet = orarioTweet;
}

// se il tweet rispetta la lunghezza consentita lo aggiungo ai tweet dell'utente corrente (salvato in localStorage)
function addTweet() {
    if (tweet.value.length > 50) {
        tweetCheck.textContent = "Il tuo tweet è troppo lungo!";
        event.preventDefault();
    } else if (tweet.value.length == 0) {
        tweetCheck.textContent = "Il tuo tweet è vuoto!";
        event.preventDefault();
    } else {
        var newTweet = new Tweet(tweet.value, getTime());
        (localUser.tweets).push(newTweet);
        localStorage.setItem("log", JSON.stringify(localUser));
        localStorage.setItem("prevTweet", JSON.stringify(newTweet)); 
        // salvo anche il tweet stesso nel localStorage per poterci accedere più facilmente nella funzione stampaTweet()
    }
}

// quando l'utente esegue il logout, salvo i suoi dati e tweet nel db per poi cancellarli dal localStorage
function logout() {
    fetch(USER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: localStorage.getItem("log")
    })  
    localStorage.removeItem("log");
    localStorage.removeItem("prevTweet");
}

// mostra (se esiste) il tweet presente in localStorage (il tweet inviato prima del (ri)caricamento della pagina)
function stampaTweet() {
    prevTweet.textContent = "";
    if (localPrevTweet != null) {
        prevTweet.innerHTML = "[" + localPrevTweet.orarioTweet + "] @" + localUser.username + "<br>" + localPrevTweet.tweet;
    } else {
        prevTweet.textContent = "Scrivi il tuo tweet nella casella qua sopra e comparirà qui!";
    }
}
