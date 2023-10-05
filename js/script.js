const nav = document.querySelector(".nav");
const hamburguer = document.querySelector(".hamburguer");
const menuItems = document.querySelectorAll(".nav ul li a");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
  hamburguer.classList.toggle("x");
});

function closeMenu() {
  nav.classList.remove("nav--open");
  hamburguer.classList.remove("x");
}

menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  if (nav.classList.contains("nav--open")) {
    closeMenu();
  }
});
