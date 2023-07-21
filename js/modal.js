function openModal(obj) {
  const popover = document.getElementById("gallery-popover");

  const popoverHTML = `
          <div class="modal">
            <img class="modal-image" src="${obj.image}" alt="${obj.title.en}">
            <div class="modal-content">
            <button class="btn close" popovertarget="gallery-popover" popovertargetaction="hide">
              <img class= "modal-close" src="./assets/button_close.svg" alt="close" />
            </button>
            <div class="modal-content-text">
              <h2>${obj.title.en}</h2>
              <p>${obj.description.en}</p>
              <h2>From book: ${obj.title.en} ${obj.title.en}</h2>
              <p class="read-the-book"> read the book: <a>IT</a> | <a>RU</a></p>
            </div>
          </div>
          </div>
      `;

  popover.innerHTML = popoverHTML;
  changeModalLanguage(obj);
}
