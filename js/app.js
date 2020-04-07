const home = document.getElementById("home");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  home.style.backgroundPositionY = offset * 0.6 + "px";
});
