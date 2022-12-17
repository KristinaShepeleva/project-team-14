const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
   dynamicBullets: true,
  },
  autoHeight: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction:true
  }
 
});


