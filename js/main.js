import illustationsArray from "./illustrationsData.js";

// Generates illustration cards

illustationsArray.forEach((obj) => {
  const image = document.createElement("img");
  image.src = obj.image;
  image.alt = obj.title;
  image.addEventListener("click", function () {
    openModal(obj);
  });

  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.appendChild(image);
});
