function openModal(obj) {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.style.display = "block";

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

  const close = document.querySelector(".modal-close");

  close.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  document.addEventListener("click", (event) => {
    if (event.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  });
}
