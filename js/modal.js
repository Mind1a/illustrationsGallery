objects = [
  {
    image: "./assets/illustrations/1.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
  {
    image: "./assets/illustrations/2.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
  {
    image: "./assets/illustrations/3.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
  {
    image: "./assets/illustrations/4.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
  {
    image: "./assets/illustrations/5.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
  {
    image: "./assets/illustrations/6.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
  {
    image: "./assets/illustrations/7.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
  {
    image: "./assets/illustrations/8.jpg",
    title: "Illustration Title",
    description:
      "Short text short text short text short text short text short text short text short text",
  },
];

function openModal(obj) {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.add(".modal-container");

  const modalHTML = `
        <div class="modal">
            <img src="${obj.image}" alt="${obj.title}">
            <div class="modal-content">
            <button class="btn close">
              <img class= "modal-close" src="./assets/button_close.svg" alt="close" />
            </button>
            <div class="modal-content-text">
              <h2>${obj.title}</h2>
              <p>${obj.description}</p>
              <h2>From book: ${obj.title} ${obj.title}</h2>
              <p class="read-the-book"> read the book: <a>IT</a> | <a>RU</a></p>
            </div>
          </div>
        </div>
      `;

  modalContainer.innerHTML = modalHTML;

  const modal = document.querySelector(".modal");
  const close = document.querySelector(".modal-close");

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
