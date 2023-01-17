const burgerBtn = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
