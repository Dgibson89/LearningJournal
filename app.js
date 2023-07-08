const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
});
