// tabs.js
export function setupTabs() {
  const serviceItems = document.querySelectorAll(".services__item");
  const serviceContent = document.querySelectorAll(".services__info-wrapper");

  const removeAll = () => {
    serviceItems.forEach((item, index) => {
      item.classList.remove("services__item-active");
      serviceContent[index].classList.remove("services__info-wrapper-active");
    });
  };

  serviceItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeAll();
      serviceContent[index].classList.add("services__info-wrapper-active");
      item.classList.add("services__item-active");
    });
  });

  const jobTabs = document.querySelectorAll(".job__tab");
  const jobContents = document.querySelectorAll(".job__tab-content");

  const removeAllContent = () => {
    jobTabs.forEach((tab, index) => {
      tab.classList.remove("tab-active");
      jobContents[index].classList.remove("content-active");
    });
  };

  jobTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      removeAllContent();
      tab.classList.add("tab-active");
      jobContents[index].classList.add("content-active");
    });
  });
}
