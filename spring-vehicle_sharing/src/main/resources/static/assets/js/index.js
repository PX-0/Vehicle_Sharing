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
    // pagination: {
    //   el: '.swiper-pagination',
    // },
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