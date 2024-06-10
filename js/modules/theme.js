export function setupThemeSwitch() {
  const toggleButton = document.querySelector(".header__switch");
  const mainLogo = document.querySelector(".header__logo");
  const footerLogo = document.querySelector(".footer__icon");
  const burgerLogo = document.querySelector(".burger");
  const currentTheme = localStorage.getItem("theme");
  const isMainPage =
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html");

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

  // const getPaths = (theme, isMainPage) => {
  //   const basePath = isMainPage ? "./image/" : "../image/";
  //   return {
  //     mainLogo: `${basePath}header/nethammer-logo${
  //       theme === "light" ? "-light" : ""
  //     }.png`,
  //     footerLogo: `${basePath}footer/nethammer-${
  //       theme === "light" ? "blue" : "white"
  //     }-logo.png`,
  //     burgerLogo: `${basePath}header/burger${
  //       theme === "light" ? "" : "-dark"
  //     }.svg`,
  //   };
  // };

  const changeImage = (imgElement, newSrc) => {
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = newSrc;
      imgElement.style.opacity = 1;
    }, 300);
  };

  const changeImages = (theme) => {
    const paths = getPaths(theme, isMainPage);
    changeImage(mainLogo, paths.mainLogo);
    changeImage(footerLogo, paths.footerLogo);
    changeImage(burgerLogo, paths.burgerLogo);
  };

  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    changeImages("light");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const theme = document.body.classList.contains("light-mode")
      ? "light"
      : "dark";
    changeImages(theme);
    localStorage.setItem("theme", theme);
    toggleButton.classList.toggle("active");
  });
}
