// Creates toggle button
const languageButton = document.getElementById("language-btn");
const languageToggleBtn = document.querySelectorAll(".language-btn");
languageToggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => toggleLanguage(btn));
});

function toggleLanguage(btn) {
  let currentLanguage = languageButton.innerHTML;
  let newLanguage = btn.innerHTML;
  languageButton.innerHTML = newLanguage;
  btn.innerHTML = currentLanguage;

  let lang = newLanguage;

  if (lang === "GE") {
    changeLanguage("GE");
  } else if (lang === "EN") {
    changeLanguage("EN");
  } else if (lang == "IT") {
    changeLanguage("IT");
  }

  languageToggleBtns.classList.toggle("active");
}

// Changes the language in the menu
function changeLanguage(lang) {
  const menuItems = document.querySelector(".menu-items");

  switch (lang) {
    case "GE":
      menuItems.innerHTML = `<a href="./index.html"> 
      <p>სარჩევი</p></a>
      <span></span>
      <a href="./index.html">
      <p>პროექტის შესახებ</p></a>
      <span></span>
      <a href="./index.html"><p>წიგნის PDF ვერსია</p></a>
      <span></span>
      <a href="./index.html"><p>გალერეა</p></a>`;
      break;

    case "EN":
      menuItems.innerHTML = `<a href="./index.html"> 
      <p>Table of contents</p></a>
      <span></span>
      <a href="./index.html">
      <p>About the project</p></a>
      <span></span>
      <a href="./index.html"><p>PDF version of the book</p></a>
      <span></span>
      <a href="./index.html"><p>Gallery</p></a>`;
      break;

    case "IT":
      menuItems.innerHTML = `<a href="./index.html"> 
      <p>sommario</p></a>
      <span></span>
      <a href="./index.html">
      <p>Informazioni sul progetto</p></a>
      <span></span>
      <a href="./index.html"><p>Versione PDF del libro</p></a>
      <span></span>
      <a href="./index.html"><p>Galleria</p></a>`;
      break;
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

    case "IT":
      modalContentText.innerHTML = `
        <h2>${obj.title.it}</h2>
        <p>${obj.description.it}</p>
        <h2>Dal libro: ${obj.title.it} ${obj.title.it}</h2>
        <p class="read-the-book"> leggi il libro: <a>IT</a> | <a>RU</a></p>
      `;
      break;
  }
}
