import React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import Next from "./carouselNext";
import Prev from "./carouselPrev";
import "./carousel.scss";
const Carousel = (props) => {
  const [slidePos, setSlidePos] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const maxSlidePos = props.slideNum - 1;
  const slides = document.getElementsByClassName("carousel-card");
  const carouselContent = [];
  const ref = useRef(null);

  useLayoutEffect(() => {
    setSlideWidth(ref.current.offsetWidth);
    Array.from(slides).forEach(setSlideTrack);
  }, []);

  const setSlideTrack = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };
  Array.from(slides).forEach(setSlideTrack);

  function updateSlidePos(e, nextSlidePos = slidePos) {
    try {
      if (e.target.classList.contains("carousel-next")) {
        nextSlidePos = getNextSlide();
      } else if (e.target.classList.contains("carousel-prev")) {
        nextSlidePos = getPrevSlide();
      }
    } catch (error) {}
    const displaceBy = slides[nextSlidePos].style.left;
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.transform = "translateX(-" + displaceBy + ")";
    }

    slides[slidePos].classList.toggle("carousel-active");
    slides[nextSlidePos].classList.toggle("carousel-active");
    setSlidePos(nextSlidePos);

    console.log(slidePos);
  }

  function getNextSlide() {
    var newSlidePos;

    if (slidePos == maxSlidePos) {
      newSlidePos = slidePos - maxSlidePos;
    } else {
      newSlidePos = slidePos + 1;
    }
    return newSlidePos;
  }
  function getPrevSlide() {
    var newSlidePos;
    if (slidePos == 0) {
      newSlidePos = slidePos + maxSlidePos;
    } else {
      newSlidePos = slidePos - 1;
    }
    return newSlidePos;
  }

  carouselContent.push(
    <div ref={ref} className="carousel-card carousel-active">
      <img
        className="carousel-img"
        src={"/Images/icons/" + props.srcs[0]}
        alt=""
      />
    </div>
  );
  for (var i = 1; i < props.slideNum; i++) {
    carouselContent.push(
      <div ref={ref} className="carousel-card">
        <img
          className="carousel-img"
          src={"/Images/icons/" + props.srcs[i]}
          alt=""
        />
      </div>
    );
  }
  var resizeCarousel;
  window.onresize = () => {
    setSlideWidth(ref.current.offsetWidth);
    Array.from(slides).forEach(setSlideTrack);
    resizeCarousel = setTimeout(updateSlidePos, 100);
  };

  return (
    <div className="carousel">
      <Prev updateSlidePos={updateSlidePos} />
      <div className="carousel-content">{carouselContent}</div>
      <Next updateSlidePos={updateSlidePos} />
    </div>
  );
};

export default Carousel;
