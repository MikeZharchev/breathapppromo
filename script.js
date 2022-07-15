// DOM ELEMENTS

const header = document.querySelector(".header--actual");
const headerPlaceholder = document.querySelector(".header--placeholder");
const section1 = document.querySelector(".section--1");
const menuBtn = document.querySelector(".btn-menu-mob");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const buttonMenuClose = document.querySelector(".btn-menu-close");

// import Typed from "typed.js";

const options = {
  strings: ["Novel", "Script", "Blogpost", "Article", "Story"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  startDelay: 1000,
  backDelay: 1000,

  //   smartBackspace: true,
};

const typed = new Typed(".typed", options);

// STICKY NAV

const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    headerPlaceholder.classList.remove("hidden");
    header.classList.add("header-sticky");
  } else {
    headerPlaceholder.classList.add("hidden");
    header.classList.remove("header-sticky");
  }
};

const observer = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(section1);

// Functions

const toggleMobileMenu = () => {
  menu.classList.toggle("menu--open");
  overlay.classList.toggle("overlay--open");
  buttonMenuClose.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");
};

// Event listeners

menuBtn.addEventListener("click", toggleMobileMenu);
overlay.addEventListener("click", toggleMobileMenu);
buttonMenuClose.addEventListener("click", toggleMobileMenu);
