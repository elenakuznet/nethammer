// Swipers

export function setupSwipers() {
  new Swiper(".work__slider", {
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    mousewheel: true,
    keyboard: true,
    navigation: {
      nextEl: ".button-right",
      prevEl: ".button-left",
    },
  });

  new Swiper(".team__slider", {
    spaceBetween: 20,
    slidesPerView: 4,
    loop: true,
    mousewheel: true,
    keyboard: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-before",
    },
  });
}
