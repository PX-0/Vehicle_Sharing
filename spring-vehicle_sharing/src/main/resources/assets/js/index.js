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

var datiPosizione;
/* ------------------------------ end function ------------------------------ */

fetch(url).then(data=>{return data.json()})
.then(resp=>{
      resp.forEach(element => {
        var swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide','')


        
        datiPosizione = element.posizioneAttuale.split(",");

      });

})