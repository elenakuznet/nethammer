import { setupThemeSwitch } from "./modules/theme.js";
import { setupTabs } from "./modules/tabs.js";
import { setupCustomCursor } from "./modules/customCursor.js";
import { setupNumberAnimation } from "./modules/numberAnimation.js";
import { setupSwipers } from "./modules/swiperSetup.js";
import { setupFormHandling } from "./modules/setupFormHandling.js";

document.addEventListener("DOMContentLoaded", () => {
  setupThemeSwitch();
  setupCustomCursor();
  setupNumberAnimation();
  setupTabs();
  setupSwipers();
  setupFormHandling();
});

// Switch theme

// document.addEventListener("DOMContentLoaded", () => {
//   const toggleButton = document.querySelector(".header__switch");
//   const mainLogo = document.querySelector(".header__logo");
//   const footerLogo = document.querySelector(".footer__icon");
//   const burgerLogo = document.querySelector(".burger");
//   const currentTheme = localStorage.getItem("theme");
//   const isMainPage =
//     window.location.pathname === "/" ||
//     window.location.pathname.endsWith("index.html");

//   // Define paths for the images based on the theme and page location
//   const getPaths = (theme, isMainPage) => {
//     const basePath = isMainPage ? "./image/" : "../image/";
//     return {
//       mainLogo:
//         theme === "light"
//           ? `${basePath}header/nethammer-logo-light.png`
//           : `${basePath}header/nethammer-logo.png`,
//       footerLogo:
//         theme === "light"
//           ? `${basePath}footer/nethammer-blue-logo.png`
//           : `${basePath}footer/nethammer-white-logo.png`,
//       burgerLogo:
//         theme === "light"
//           ? `${basePath}header/burger.svg`
//           : `${basePath}header/burger-dark.svg`,
//     };
//   };

//   // Function to change images with a smooth transition
//   const changeImage = (imgElement, newSrc) => {
//     imgElement.style.opacity = 0; // Fade out
//     setTimeout(() => {
//       imgElement.src = newSrc;
//       imgElement.style.opacity = 1; // Fade in
//     }, 300); // Match the duration of the CSS transition
//   };

//   // Function to change all images based on the theme
//   const changeImages = (theme) => {
//     const paths = getPaths(theme, isMainPage);
//     changeImage(mainLogo, paths.mainLogo);
//     changeImage(footerLogo, paths.footerLogo);
//     changeImage(burgerLogo, paths.burgerLogo);
//   };

//   // Initial theme setup
//   if (currentTheme === "light") {
//     document.body.classList.add("light-mode");
//     changeImages("light");
//   }

//   // Event listener for theme toggle
//   toggleButton.addEventListener("click", () => {
//     document.body.classList.toggle("light-mode");
//     const theme = document.body.classList.contains("light-mode")
//       ? "light"
//       : "dark";
//     changeImages(theme);
//     localStorage.setItem("theme", theme);
//   });

//   toggleButton.addEventListener("click", () => {
//     toggleButton.classList.toggle("active");
//   });
// });

// Custom cursor

// document.addEventListener("DOMContentLoaded", (event) => {
//   const cursor = document.getElementById("cursor");
//   let mouseX = 0,
//     mouseY = 0;
//   let posX = 0,
//     posY = 0;

//   document.addEventListener("mousemove", (e) => {
//     mouseX = e.pageX;
//     mouseY = e.pageY;
//   });

//   function updateCursor() {
//     posX += (mouseX - posX) / 5;
//     posY += (mouseY - posY) / 5;
//     cursor.style.left = posX + "px";
//     cursor.style.top = posY + "px";
//     requestAnimationFrame(updateCursor);
//   }

//   requestAnimationFrame(updateCursor);
// });

// Changing numbers

// window.addEventListener("DOMContentLoaded", () => {
//   // Структура страницы загружена и готова к взаимодействию

//   const countNums = () => {
//     // объявляем функцию, чтобы всё, что относится к анимированию чисел было в одном месте
//     const numbersObserver = new IntersectionObserver((entries, observer) => {
//       // создаём наблюдатель за элементами, в которых будем увеличивать значение числа
//       entries.forEach((entry) => {
//         // для каждого наблюдаемого элемента
//         if (entry.isIntersecting) {
//           // проверяем, находится ли он в видимой области браузера
//           const count = new CountUp( // настраиваем новую анимацию для числа
//             entry.target.id, // 1. задаём идентификатор элемента с числом
//             0, // 2. задаём начальное число
//             entry.target.dataset.num, // 3. задаём конечное число (берем из data-атрибута)
//             0, // 4. задаём количество цифр после запятой
//             entry.target.dataset.duration || 4, // 5. задаём продолжительность анимации в секундах (если у элемента есть атрибут data-duration, то берём из него значение, иначе назначаем 4 секунды по-умолчанию)
//             {
//               // указываем дополнительные параметры
//               separator: "", // задаём разделитель групп разрядов (например для миллиона - 1 000 000)
//               // prefix: entry.target.dataset.prefix || "", // задаём префикс - любые символы перед числом (берем значение из data-prefix, если не указано - то задаем пустую строку по умолчанию)
//               suffix: entry.target.dataset.suffix || "", // задаём суффикс - любые символы после числа (берем значение из data-suffix, если не указано - то задаем пустую строку по умолчанию)
//             }
//           );
//           count.start(() => {
//             // запускаем настроенную анимацию и по окончании анимации...
//             // entry.target.parentElement.classList.add("numbers__item_done"); // ...добавляем активный класс родительскому элементу
//           });
//           observer.unobserve(entry.target); // отключаем наблюдение за элементом
//         }
//       });
//     });
//     document.querySelectorAll(".numbers__count").forEach((num) => {
//       // ищем элементы за которыми будем наблюдать, и для каждого...
//       numbersObserver.observe(num); // ...запускаем наблюдение
//     });
//   };
//   countNums(); // запускаем объявленную функцию
// });

// //Tabs

// import { setupTabs } from "./modules/tabs.js";

// const serviceItems = document.querySelectorAll(".services__item");
// const serviceContent = document.querySelectorAll(".services__info-wrapper");

// function removeAll() {
//   serviceItems.forEach((item, index) => {
//     item.classList.remove("services__item-active");
//     serviceContent[index].classList.remove("services__info-wrapper-active");
//   });
// }

// serviceItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     removeAll();
//     serviceContent[index].classList.add("services__info-wrapper-active");
//     item.classList.add("services__item-active");
//   });
// });

// // Tabs for vacancies

// const jobTabs = document.querySelectorAll(".job__tab");
// const jobContents = document.querySelectorAll(".job__tab-content");
// console.log(jobTabs);

// function removeAllContent() {
//   jobTabs.forEach((tab, index) => {
//     tab.classList.remove("tab-active");
//     jobContents[index].classList.remove("content-active");
//   });
// }

// jobTabs.forEach((tab, index) =>
//   tab.addEventListener("click", () => {
//     removeAllContent();
//     tab.classList.add("tab-active");
//     jobContents[index].classList.add("content-active");
//   })
// );

// Swiper 1

// new Swiper(".work__slider", {
//   spaceBetween: 20,
//   slidesPerView: 3,
//   centeredSlides: true,
//   loop: true,
//   mousewheel: true,
//   keyboard: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: ".button-right",
//     prevEl: ".button-left",
//   },
// });

// Swiper 2

// new Swiper(".team__slider", {
//   spaceBetween: 20,
//   slidesPerView: 4,
//   // centeredSlides: true,
//   loop: true,
//   mousewheel: true,
//   keyboard: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: ".button-next",
//     prevEl: ".button-before",
//   },
// });

// Маска

// const inputTel = document.querySelectorAll(".tel-input");
// const telMask = new Inputmask("+7 (999)-999-99-99");

// telMask.mask(inputTel);

// Форма

// const form = document.getElementById("form");

// function handleFormSubmit(event) {
//   event.preventDefault();

//   // Получаем данные из формы

//   const formData = new FormData(form);
//   console.log(formData);

//   // Отправляем данные на сервер
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => {
//       // Обрабатываем ответ от сервера
//       console.log(response);
//     })
//     .catch((error) => {
//       // Обрабатываем ошибку
//       console.error(error);
//     });
// }

// form.addEventListener("submit", handleFormSubmit);
