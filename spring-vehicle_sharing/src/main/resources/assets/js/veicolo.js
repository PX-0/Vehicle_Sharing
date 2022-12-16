//script per prendere coordinate
const urlHead = "https://nominatim.openstreetmap.org/search.php?q=";
const urlTail = "&format=json&limit=1";
var city;
var cityCap;
//script per fare la mappa
function mapFill() {
    var coors = JSON.parse(sessionStorage.getItem('coordinate'));

    var map = L.map('map').setView([Number(coors.lat), Number(coors.lon)], 8);

    var marker = L.marker([Number(coors.lat),Number(coors.lon)]).addTo(map)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        zoom: 100,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

//script per prendere coordinate
fetch(urlHead+city+"+"+String(cityCap)+urlTail,{method:"GET",headers:{'Content-type': 'application/json'}})
.then(data=>{return data.json()})
.then(resp=>{

    resp.forEach(element => {
        var coordinate = {
            lat:element.lat,
            lon : element.lon,
        }

        sessionStorage.setItem('coordinate',JSON.stringify(coordinate));
        mapFill()
    });

})