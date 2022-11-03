const slidesContainer = document.getElementById("ai_slides-container");
const slide = document.querySelector(".ai_slide");
const slidesContainer2 = document.getElementById("brick_slides-container");
const slide2 = document.querySelector(".brick_slide");
const prevButton = document.getElementById("ai-arrow-prev");
const nextButton = document.getElementById("ai-arrow-next");
const prevButton2 = document.getElementById("brick-arrow-prev")
const nextButton2 = document.getElementById("brick-arrow-next");


nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

nextButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft += slideWidth;
});
 
prevButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft -= slideWidth;
});
