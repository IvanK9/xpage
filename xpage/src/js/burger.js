const btnBurger = document.querySelector('.header__btn-burger');
console.log(btnBurger);

const headerNav = document.querySelector(".header__nav");
const headerItem = document.querySelectorAll(".nav__item");
const body = document.getElementsByTagName("body")[0];

btnBurger.addEventListener("click", function () {
  btnBurger.classList.toggle("header__btn-burger--active");
  headerNav.classList.toggle("nav--open");
  body.classList.toggle("noscroll");
});

headerItem.forEach((link) =>
  link.addEventListener("click", function () {
    btnBurger.classList.remove("header__btn-burger--active");
    headerNav.classList.remove("nav--open");
    body.classList.remove("noscroll");
  })
);