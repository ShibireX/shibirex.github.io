const slidesContainer = document.getElementById("ai_slides-container");
const slide = document.querySelector(".ai_slide");
const prevButton = document.getElementById("ai-arrow-prev");
const nextButton = document.getElementById("ai-arrow-next");

let clicks = 0;

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  clicks += 1;
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  clicks += 1;
});

let counter = 0;

var intervalId = window.setInterval(function(){
  if (counter === 5 || clicks >= 1) {
    clearInterval(intervalId)
    return none; 
  }
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  counter += 1;
}, 5000);

