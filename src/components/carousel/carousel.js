import React from "react";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Next from "./carouselNext";
import Prev from "./carouselPrev";
import "./carousel.scss";
const Carousel = (props) => {
  const [slidePos, setSlidePos] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const maxSlidePos = props.slideNum - 1;
  const slides = document.getElementsByClassName("carousel-card");
  const carouselContent = [];
  const ref = useRef(null);

  useLayoutEffect(() => {
    setSlideWidth(ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    function slideTrackResize() {
      setDimensions({
        height: window.height,
        width: window.width,
      });
    }
    setSlideWidth(ref.current.offsetWidth);
    Array.from(slides).forEach(setSlideTrack);
    window.addEventListener("resize", slideTrackResize);
    setTimeout(updateSlidePos, 100);
    return () => {
      window.removeEventListener("resize", slideTrackResize);
    };
  });

  function setSlideTrack(slide, index) {
    slide.style.left = slideWidth * index * 1.1 + "px";
  }
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
  }

  function getNextSlide() {
    var newSlidePos;

    if (slidePos === maxSlidePos) {
      newSlidePos = slidePos - maxSlidePos;
    } else {
      newSlidePos = slidePos + 1;
    }
    return newSlidePos;
  }
  function getPrevSlide() {
    var newSlidePos;
    if (slidePos === 0) {
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
        src={"/Images/projects/" + props.carouselInfo[0].src}
        alt=""
      />
      {props.carouselInfo[0].itemDesc}
    </div>
  );
  for (var i = 1; i < props.slideNum; i++) {
    carouselContent.push(
      <div ref={ref} className="carousel-card">
        <img
          className="carousel-img"
          src={"/Images/projects/" + props.carouselInfo[i].src}
          alt=""
        />
        {props.carouselInfo[i].itemDesc}
      </div>
    );
  }

  return (
    <div className="carousel">
      <Prev updateSlidePos={updateSlidePos} />
      <div className="carousel-content">{carouselContent}</div>
      <Next updateSlidePos={updateSlidePos} />
    </div>
  );
};

export default Carousel;
