const toggleMenuBtn = document.querySelector(".toggle-menu");
const toggleBtns = document.querySelector(".toggle-btns");
const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const menu = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".close");
const galleryContainer = document.querySelector(".gallery-container");
const paginationContainer = document.getElementById("pagination");
const languageBtn = document.getElementById("language-btn");
const languageToggleBtns = document.querySelector(".language-toggle-btns");

toggleMenuBtn.addEventListener("click", () => {
  toggleBtns.classList.toggle("active");
});

burgerMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

languageBtn.addEventListener("click", () => {
  languageToggleBtns.classList.toggle("active");
});
