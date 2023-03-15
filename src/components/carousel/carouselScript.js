//Carousel Code
const carouselContent = document.getElementsByClassName("carousel-card"); //Gets a HTML Colection (List) of all the carouselContent
const carouselBtns = document.getElementsByClassName("carousel-ctrl"); //Gets a HTML colection (List) of all the carousel button
//                                                                       //controls

var slidePos = 0; //sets a global variable for the slide position to keep track of the slide position
//                //sets it at a default value of 0

Array.from(carouselBtns).forEach((element) => {
  //Converts the HTML Colection of buttons to an array
  element.addEventListener("click", (event) => {
    //and adds an event listener to each button
    updateSlidePos(event, slidePos); //So eeach time a button is clicked the updateSlidePos
  }); //function is called to update the slide
}); //it will pass the event and current slidePos as parameters

const slideWidth = carouselContent[0].getBoundingClientRect().width;

const setSlidePos = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

Array.from(carouselContent).forEach(setSlidePos);

function updateSlidePos(event, currentSlidePos) {
  var newSlidePos;

  if (event.target.classList.contains("carousel-next")) {
    newSlidePos = getNextSlide(currentSlidePos);
  } else if (event.target.classList.contains("carousel-prev")) {
    newSlidePos = getPrevSlide(currentSlidePos);
  }

  const displaceBy = carouselContent[newSlidePos].style.left;
  for (var i = 0; i < carouselContent.length; i++) {
    carouselContent[i].style.transform = "translateX(-" + displaceBy + ")";
  }

  slidePos = newSlidePos;

  carouselContent[currentSlidePos].classList.toggle("carousel-active");
  carouselContent[newSlidePos].classList.toggle("carousel-active");
}

function getNextSlide(currentSlidePos) {
  var nextSlidePos = currentSlidePos;

  if (currentSlidePos == carouselContent.length - 1) {
    nextSlidePos = 0;
  } else {
    ++nextSlidePos;
  }
  console.log(nextSlidePos);
  return nextSlidePos;
}

function getPrevSlide(currentSlidePos) {
  var nextSlidePos = currentSlidePos;

  if (currentSlidePos == 0) {
    nextSlidePos = carouselContent.length - 1;
  } else {
    --nextSlidePos;
  }
  console.log(nextSlidePos);
  return nextSlidePos;
}
