const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 100,

  // Navigation arrows
  navigation: {
    nextEl: ".button-right",
    prevEl: ".button-left",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
