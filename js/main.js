// Generates illustration cards

objects.forEach((obj) => {
  const image = document.createElement("img");
  image.src = obj.image;
  image.addEventListener("click", function () {
    openModal(obj);
  });

  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.appendChild(image);
});
