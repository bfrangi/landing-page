/**
 * Programmatically builds navigation scrolls to anchors from
 * navigation, and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// Build the navbar by populating it with <li>. We use a document
// fragment to avoid reflowing the page for each <li> added to the <ul>
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.createDocumentFragment();
  // Iterate along the sections and add the link to the document fragment
  for (let i = 0; i < sections.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${sections[i].id}" class="menu__link">${sections[i].dataset.nav}</a>`;
    navItems.appendChild(listItem);
  }
  // Add the document fragment to the DOM and set the first nav item to active
  navList.appendChild(navItems);
  navList.querySelectorAll("a")[0].classList.add("active-link");
});

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function () {
  let navItems = navList.querySelectorAll("a");
  for (let i = 0; i < sections.length; i++) {
    // Get the section and it's position
    let section = sections[i];
    let navItem = navItems[i];
    let position = section.getBoundingClientRect();
    // Check the position of the section and add the active class if 
    // it is near the top of the viewport
    if (position.top <= 150 && position.bottom >= 150) {
      section.classList.add("active-section");
      navItem.classList.add("active-link");
    } else {
      section.classList.remove("active-section");
      navItem.classList.remove("active-link");
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
