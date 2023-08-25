/* Navigation */

// navigation toggler
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelector("#hLink");
const bx = document.querySelector(".bx");

// adding eventlistener
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  bx.classList.toggle("bx-x");
});

//to remove the nav each time the nav is clicked
hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    bx.classList.toggle("bx-x");
  });
});

/* End of Navigation */

