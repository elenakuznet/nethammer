// Switch theme

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".header__switch");
  const mainLogo = document.querySelector(".header__logo");
  const footerLogo = document.querySelector(".footer__icon");
  const burgerLogo = document.querySelector(".burger");
  const currentTheme = localStorage.getItem("theme");
  const isMainPage =
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html");

  // Define paths for the images based on the theme and page location
  const getPaths = (theme, isMainPage) => {
    const basePath = isMainPage ? "./image/" : "../image/";
    return {
      mainLogo:
        theme === "light"
          ? `${basePath}header/nethammer-logo-light.png`
          : `${basePath}header/nethammer-logo.png`,
      footerLogo:
        theme === "light"
          ? `${basePath}footer/nethammer-blue-logo.png`
          : `${basePath}footer/nethammer-white-logo.png`,
      burgerLogo:
        theme === "light"
          ? `${basePath}header/burger.svg`
          : `${basePath}header/burger-dark.svg`,
    };
  };

  // Function to change images with a smooth transition
  const changeImage = (imgElement, newSrc) => {
    imgElement.style.opacity = 0; // Fade out
    setTimeout(() => {
      imgElement.src = newSrc;
      imgElement.style.opacity = 1; // Fade in
    }, 300); // Match the duration of the CSS transition
  };

  // Function to change all images based on the theme
  const changeImages = (theme) => {
    const paths = getPaths(theme, isMainPage);
    changeImage(mainLogo, paths.mainLogo);
    changeImage(footerLogo, paths.footerLogo);
    changeImage(burgerLogo, paths.burgerLogo);
  };

  // Initial theme setup
  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    changeImages("light");
  }

  // Event listener for theme toggle
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const theme = document.body.classList.contains("light-mode")
      ? "light"
      : "dark";
    changeImages(theme);
    localStorage.setItem("theme", theme);
  });

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
  });
});

// Смена логина только

// document.addEventListener("DOMContentLoaded", () => {
//   const toggleButton = document.querySelector(".header__switch");
//   const logo = document.querySelector(".header__logo");
//   const footerLogo = document.querySelector(".footer__icon");
//   const burger = document.querySelector(".burger");
//   const currentTheme = localStorage.getItem("theme");
//   const isMainPage =
//     window.location.pathname === "/" ||
//     window.location.pathname.endsWith("index.html");

//   const getLogoPath = (theme, isMainPage) => {
//     if (isMainPage) {
//       return theme === "light"
//         ? "./image/header/nethammer-logo-light.png"
//         : "./image/header/nethammer-logo.png";
//     } else {
//       return theme === "light"
//         ? "../image/header/nethammer-logo-light.png"
//         : "../image/header/nethammer-logo.png";
//     }
//   };

//   const changeLogo = (theme) => {
//     logo.style.opacity = 0; // Fade out
//     setTimeout(() => {
//       logo.src = getLogoPath(theme, isMainPage);
//       logo.style.opacity = 1; // Fade in
//     }, 300); // Match the duration of the CSS transition
//   };

//   if (currentTheme === "light") {
//     document.body.classList.add("light-mode");
//     changeLogo("light");
//   }

//   toggleButton.addEventListener("click", () => {
//     document.body.classList.toggle("light-mode");
//     const theme = document.body.classList.contains("light-mode")
//       ? "light"
//       : "dark";
//     changeLogo(theme);
//     localStorage.setItem("theme", theme);
//   });

// if (currentTheme === "light") {
//   document.body.classList.add("light-mode");
//   logo.src = "../image/header/nethammer-logo-light.png";
//   footerLogo.src = "../image/footer/nethammer-blue-logo.png";
//   burger.src = "../image/header/burger.svg";
// }

// toggleButton.addEventListener("click", () => {
//   document.body.classList.toggle("light-mode");
//   let theme = "dark";
//   if (document.body.classList.contains("light-mode")) {
//     theme = "light";
//     logo.src = "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      image/header/nethammer-logo-light.png";
//     footerLogo.src = "../image/footer/nethammer-blue-logo.png";
//     burger.src = "../image/header/burger.svg";
//   } else {
//     logo.src = "../image/header/nethammer-logo.png";
//     footerLogo.src = "../image/footer/nethammer-white-logo.png";
//     burger.src = "../image/header/burger-dark.svg";
//   }
//   localStorage.setItem("theme", theme);
// });

// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("active");
// });
// });

//Tabs

const serviceItems = document.querySelectorAll(".services__item");
const serviceContent = document.querySelectorAll(".services__info-wrapper");

function removeAll() {
  serviceItems.forEach((item, index) => {
    item.classList.remove("services__item-active");
    serviceContent[index].classList.remove("services__info-wrapper-active");
  });
}

serviceItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeAll();
    serviceContent[index].classList.add("services__info-wrapper-active");
    item.classList.add("services__item-active");
  });
});

// Tabs for vacancies

const jobTabs = document.querySelectorAll(".job__tab");
const jobContents = document.querySelectorAll(".job__tab-content");
console.log(jobTabs);

function removeAll() {
  jobTabs.forEach((tab, index) => {
    tab.classList.remove("tab-active");
    jobContents[index].classList.remove("content-active");
  });
}

jobTabs.forEach((tab, index) =>
  tab.addEventListener("click", () => {
    removeAll();
    tab.classList.add("tab-active");
    jobContents[index].classList.add("content-active");
  })
);

// Swiper

new Swiper(".swiper", {
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
