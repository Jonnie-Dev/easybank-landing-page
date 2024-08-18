const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".links");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    open.style.display = "block";
    close.style.display = "none";
  } else {
    open.style.display = "none";
    close.style.display = "block";
  }
});
