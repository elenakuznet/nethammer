// Switch theme

const body = document.querySelector("body");
const toggle = document.querySelector(".header__switch");
const footer = document.querySelector(".footer");

console.log(body, toggle, footer);

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
});

toggle.addEventListener("click", () => {
  footer.classList.toggle("light-bg");
});

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});

// Swiper

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
