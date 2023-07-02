function openModal(obj) {
  const popover = document.getElementById("gallery-popover");

  const popoverHTML = `
          <div class="modal">
            <img src="${obj.image}" alt="${obj.title}">
            <div class="modal-content">
            <button class="btn close" popovertarget="gallery-popover" popovertargetaction="hide">
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

  popover.innerHTML = popoverHTML;
}
