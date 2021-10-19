// Variables
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav ul");
var anchor = document.querySelectorAll('a[href^="#"]');

// Events
hamburger.addEventListener("click", function () {
  nav.classList.toggle("show");
});

anchor.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
