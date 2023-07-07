// Creates toggle button
const languageButton = document.getElementById("language-btn");
languageButton.addEventListener("click", toggleLanguage);

function toggleLanguage() {
  if (languageButton.innerHTML === "GE") {
    languageButton.innerHTML = "EN";
    changeLanguage();
  } else {
    languageButton.innerHTML = "GE";
    changeLanguage();
  }
}

// Changes the language in the menu
function changeLanguage() {
  let lang = languageButton.innerHTML;
  const menuItems = document.querySelector(".menu-items");
  if (lang == "GE") {
    menuItems.innerHTML = `<a href="./index.html"> 
      <p>სარჩევი</p></a>
      <span></span>
      <a href="./index.html">
      <p>პროექტის შესახებ</p></a>
      <span></span>
      <a href="./index.html"><p>წიგნის PDF ვერსია</p></a>
      <span></span>
      <a href="./index.html"><p>გალერეა</p></a>`;
  } else if (lang == "EN") {
    menuItems.innerHTML = `<a href="./index.html"> 
      <p>Table of contents</p></a>
      <span></span>
      <a href="./index.html">
      <p>About the project</p></a>
      <span></span>
      <a href="./index.html"><p>PDF version of the book</p></a>
      <span></span>
      <a href="./index.html"><p>Gallery</p></a>`;
  }
}

// Changes the language in the modal
function changeModalLanguage(obj) {
  let lang = languageButton.innerHTML;
  const modalContentText = document.querySelector(".modal-content-text");

  switch (lang) {
    case "GE":
      modalContentText.innerHTML = `
        <h2>${obj.title.ge}</h2>
        <p>${obj.description.ge}</p>
        <h2>წიგნიდან: ${obj.title.ge} ${obj.title.ge}</h2>
        <p class="read-the-book">წაიკითხე წიგნი: <a>IT</a> | <a>RU</a></p>
      `;
      break;

    case "EN":
      modalContentText.innerHTML = `
        <h2>${obj.title.en}</h2>
        <p>${obj.description.en}</p>
        <h2>From book: ${obj.title.en} ${obj.title.en}</h2>
        <p class="read-the-book"> read the book: <a>IT</a> | <a>RU</a></p>
      `;
      break;
  }
}
