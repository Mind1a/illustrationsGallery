const toggleMenuBtn = document.querySelector(".toggle-menu");
const toggleBtns = document.querySelector(".toggle-btns");
const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const menu = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".close");

toggleMenuBtn.addEventListener("click", () => {
  toggleBtns.classList.toggle("active");
});

burgerMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
