// Generates illustration card

export function createCard(obj) {
  let galleryCard = document.createElement("div");
  let galleryCardHTML = `
         <button popovertarget="gallery-popover">
          <img src="${obj.image}" alt="${obj.title}" />
        </button> `;

  galleryCard.innerHTML = galleryCardHTML;
  galleryCard.addEventListener("click", function () {
    openModal(obj);
  });
  galleryContainer.appendChild(galleryCard);
}
