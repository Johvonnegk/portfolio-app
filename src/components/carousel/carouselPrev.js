import React from "react";

const carouselPrev = ({ updateSlidePos }) => {
  return (
    <button
      onClick={(e) => updateSlidePos(e)}
      className="carousel-ctrl carousel-prev"
    ></button>
  );
};

export default carouselPrev;
