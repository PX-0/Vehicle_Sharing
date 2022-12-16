const swiper = new Swiper('.swiper', {
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

const url = "";
/* ------------------------------ end function ------------------------------ */

function CreateCard(url,desc,address,link){
  var swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide','');

  var card = document.createElement('div');
  card.classList.add('card');

  var img = document.createElement('img');
  img.setAttribute('src',url);

  var cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

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

  var buttonLink = document.createElement('a');
  buttonLink.classList.add('btn','btn-primary');
  buttonLink.setAttribute('href',link);

  cardBody.appendChild(cardText);
  cardBody.appendChild(buttonLink);

  card.appendChild(cardBody);

  swiperSlide.appendChild(card);
}





fetch(url).then(data=>{return data.json()})
.then(resp=>{
      resp.forEach(element => {
      

      });

})