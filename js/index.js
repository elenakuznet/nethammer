// Switch theme

const body = document.querySelector("body");
const toggle = document.querySelector(".header__switch");
const footer = document.querySelector(".footer");

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
  // slidesPerView: 3,
  // loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,

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

// Маска

const inputTel = document.querySelectorAll(".tel-input");
const telMask = new Inputmask("+7 (999)-999-99-99");

telMask.mask(inputTel);

// Форма

const form = document.getElementById("form");

function handleFormSubmit(event) {
  event.preventDefault();

  // Получаем данные из формы

  const formData = new FormData(form);
  console.log(formData);

  // Отправляем данные на сервер
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      // Обрабатываем ответ от сервера
      console.log(response);
    })
    .catch((error) => {
      // Обрабатываем ошибку
      console.error(error);
    });
}

form.addEventListener("submit", handleFormSubmit);
