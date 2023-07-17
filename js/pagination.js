import illustationsArray from "./illustrationsData.js";
import { createCard } from "./main.js";

const itemsPerPage = 8;
let currentPage = 1;
let totalItems = illustationsArray.length;
let totalPages = Math.ceil(totalItems / itemsPerPage);

function updatePagination(pages, page) {
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = createPagination(pages, page);
  generateData();
}

function createPagination(pages, page) {
  let str = "<ul>";
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;

  if (page > 1) {
    str += createPaginationItem(page - 1, "<");
  }

  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page === p ? "active" : "no";
      str += createPaginationItem(p, p, active);
    }
  } else {
    if (page > 2) {
      str += createPaginationItem(1, 1);
      if (page > 3) {
        str += createPaginationItem(page - 2, "...", "minus");
      }
    }

    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }

    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages - 1) {
      pageCutLow -= 1;
    }

    for (let p = pageCutLow; p <= pageCutHigh; p++) {
      if (p === 0) {
        p += 1;
      }
      if (p > pages) {
        continue;
      }
      active = page === p ? "active" : "no";
      str += createPaginationItem(p, p, active);
    }

    if (page < pages - 1) {
      if (page < pages - 2) {
        str += createPaginationItem(page + 2, "...", "plus");
      }
      str += createPaginationItem(pages, pages);
    }
  }

  if (page < pages) {
    str += createPaginationItem(page + 1, ">");
  }

  str += "</ul>";
  return str;
}

function createPaginationItem(page, label, active = "", className = "") {
  const item = document.createElement("li");
  item.className = `page-item ${active}`;
  const link = document.createElement("a");
  if (className !== "") {
    item.classList.add(addClass);
  }
  link.textContent = label;
  link.addEventListener("click", () => {
    currentPage = page;
    updatePagination(totalPages, currentPage);
  });
  item.appendChild(link);
  return item.outerHTML;
}

function generateData() {
  galleryContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToShow = illustationsArray.slice(startIndex, endIndex);

  for (let i = 0; i < dataToShow.length; i++) {
    createCard(dataToShow[i]);
  }
}

// Event listener for pagination buttons
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.matches(".page-item a")) {
    if (target.textContent === ">") {
      currentPage += 1;
    } else if (target.textContent === "<") {
      currentPage -= 1;
    } else if (target.parentNode.classList.contains("plus")) {
      currentPage += 2;
    } else if (target.parentNode.classList.contains("minus")) {
      currentPage -= 2;
    } else {
      const page = parseInt(target.textContent);
      if (!isNaN(page)) {
        currentPage = page;
      }
    }
    updatePagination(totalPages, currentPage);
  }
});

// Initial setup
const initialPage = 1;
updatePagination(totalPages, initialPage);
