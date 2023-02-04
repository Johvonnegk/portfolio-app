import React from "react";

const carouselNext = ({ updateSlidePos }) => {
  return (
    <button
      onClick={(e) => updateSlidePos(e)}
      className="carousel-ctrl carousel-next"
    >
      &#62
    </button>
  );
};

export default carouselNext;
