const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 25,
  freeMode: true,
  loop:true,
  direction: 'horizontal',
  
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  slidesPerView: 3,
  breakpoints: {
  320: {
    slidesPerView: 1,
  },
  600: {
    slidesPerView: 2,
  },
  990: {
    slidesPerView: 3,
  }
},
});
const swaper = new Swiper('.swaper', {
  loop:true,
  direction: 'horizontal',
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
});
