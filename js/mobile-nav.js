const nav = document.querySelector(".mobile-nav");
const overflow = document.querySelector("html");
const allLinks = document.querySelectorAll(".link");

document.querySelector(".hamburger").addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    overflow.style.overflow = "auto";
  } else {
    nav.style.display = "block";
    overflow.style.overflow = "hidden";
  }
});

allLinks.forEach(element => {
  element.addEventListener("click", () => {
    nav.style.display = "none";
    overflow.style.overflow = "auto";
  });
});
