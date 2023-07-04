import illustationsArray from "./illustrationsData.js";
import { createCard } from "./main.js";

const itemsPerPage = 8;
let currentPage = 1;
let totalItems = illustationsArray.length;
let totalPages = Math.ceil(totalItems / itemsPerPage);

// Generates all cards
function generateData() {
  galleryContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex && i < totalItems; i++) {
    createCard(illustationsArray[i]);
  }
}

// reset function
function reset() {
  generateData();
  generatePagination();
}

// Generates pagination
function generatePagination() {
  paginationContainer.innerHTML = "";

  // Previous button
  const previousButton = document.createElement("button");
  previousButton.textContent = "<";
  previousButton.disabled = currentPage === 1;
  previousButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      reset();
    }
  });
  paginationContainer.appendChild(previousButton);

  // Page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.disabled = i === currentPage;
    pageButton.addEventListener("click", function () {
      currentPage = i;
      reset();
    });
    paginationContainer.appendChild(pageButton);
  }

  // Next button
  const nextButton = document.createElement("button");
  nextButton.textContent = ">";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      reset();
    }
  });
  paginationContainer.appendChild(nextButton);
}

// Generates initial data and pagination
reset();
