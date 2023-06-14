/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the navbar by populating it with <li>. We use a document 
// fragment to avoid reflowing the page for each <li> added to the <ul>
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.createDocumentFragment();
  for (let i = 0; i < sections.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${sections[i].id}" class="menu__link">${sections[i].dataset.nav}</a>`;
    navItems.appendChild(listItem);
  }
  navList.appendChild(navItems);
});

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let position = section.getBoundingClientRect();
    if (position.top <= 150 && position.bottom >= 150) {
      section.classList.add("active-section");
    } else {
      section.classList.remove("active-section");
    }
  }
});

// Smooth scroll to anchor ID
navList.addEventListener("click", function (event) {
    event.preventDefault();
    const clicked = event.target;
    const section = document.querySelector(clicked.hash);
    section.scrollIntoView({ behavior: "smooth" });
});

/**
 * End Main Functions
 *
 */
