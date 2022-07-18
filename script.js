// DOM ELEMENTS

const header = document.querySelector(".header--actual");
const headerPlaceholder = document.querySelector(".header--placeholder");
const section1 = document.querySelector(".section--1");
const section2 = document.querySelector(".section--2");
const section3 = document.querySelector(".section--3");
const section4 = document.querySelector(".section--4");
const menuBtn = document.querySelector(".btn-menu-mob");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const buttonMenuClose = document.querySelector(".btn-menu-close");
const playButton = document.querySelector(".play-button");
const videoOverlay = document.querySelector(".video-overlay");
const video = document.querySelector(".video");
const videoHtml = document.querySelector(".video-html");
const anchor1 = document.querySelector(".anchor--see-what-type");
const anchor2 = document.querySelector(".anchor--think-clear");
const anchor3 = document.querySelector(".anchor--autocomplete");

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

const toggleModal = () => {
  document.body.classList.toggle("overflow-hidden");
  videoOverlay.classList.toggle("hidden");
  video.classList.toggle("video-scale");
};

// MODAL
// set the value of the “overflow” property of the body element to “hidden” whenever the modal is opened
playButton.addEventListener("click", toggleModal);
videoOverlay.addEventListener("click", toggleModal);
videoHtml.addEventListener("click", toggleModal);

// Event listeners

anchor1.addEventListener("click", () => {
  section2.scrollIntoView({ behavior: "smooth" });
  console.log("hey");
});
anchor2.addEventListener("click", () => {
  section3.scrollIntoView({ behavior: "smooth" });
  console.log("hey");
});
anchor3.addEventListener("click", () => {
  section4.scrollIntoView({ behavior: "smooth" });
  console.log("hey");
});
menuBtn.addEventListener("click", toggleMobileMenu);
overlay.addEventListener("click", toggleMobileMenu);

// Exit modal on esc
document.addEventListener("keypress", (e) => {
  console.log(e.key);
});

buttonMenuClose.addEventListener("click", toggleMobileMenu);
