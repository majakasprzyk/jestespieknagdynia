const salonTab = document.querySelector(".salonBtn");
const metTab = document.querySelector(".metBtn");
const makeupTab = document.querySelector(".makeupBtn");

const salonGallery = document.querySelector(".salon_gallery");
const metGallery = document.querySelector(".met_gallery");
const makeupGallery = document.querySelector(".makeup_gallery");

salonTab.addEventListener("click", () => {
  salonTab.classList.add("active");
  metTab.classList.remove("active");
  makeupTab.classList.remove("active");

  salonGallery.classList.add("current");
  metGallery.classList.remove("current");
  makeupGallery.classList.remove("current");
});

metTab.addEventListener("click", () => {
  salonTab.classList.remove("active");
  metTab.classList.add("active");
  makeupTab.classList.remove("active");

  salonGallery.classList.remove("current");
  metGallery.classList.add("current");
  makeupGallery.classList.remove("current");
});

makeupTab.addEventListener("click", () => {
  salonTab.classList.remove("active");
  metTab.classList.remove("active");
  makeupTab.classList.add("active");

  salonGallery.classList.remove("current");
  metGallery.classList.remove("current");
  makeupGallery.classList.add("current");
});
