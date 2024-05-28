export function setupFormHandling() {
  const inputTel = document.querySelectorAll(".tel-input");
  const telMask = new Inputmask("+7 (999)-999-99-99");
  telMask.mask(inputTel);

  const form = document.getElementById("form");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  form.addEventListener("submit", handleFormSubmit);
}
