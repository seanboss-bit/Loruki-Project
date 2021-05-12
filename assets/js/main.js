const toggle = document.querySelector(".bars");
const links = document.querySelector(".links");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  links.classList.toggle("active");
});
