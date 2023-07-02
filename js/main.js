import illustationsArray from "./illustrationsData.js";

// Generates illustration cards

illustationsArray.forEach((obj) => {
  let galleryCard = document.createElement("div");
  let galleryCardHTML = `
         <button popovertarget="gallery-popover">
          <img src="${obj.image}" alt="${obj.title}" />
        </button>; `;

  const galleryContainer = document.querySelector(".gallery-container");
  galleryCard.innerHTML = galleryCardHTML;
  galleryCard.addEventListener("click", function () {
    openModal(obj);
  });
  galleryContainer.appendChild(galleryCard);
});
