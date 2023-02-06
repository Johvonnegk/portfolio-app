import React from "react";
import "./about.scss";
import Carousel from "../../components/carousel/carousel";
const about = () => {
  const carouselImages = [
    "python-icon.png",
    "java-logo.png",
    "linux-icon.png",
    "cprogramming-icon.png",
    "cplus-icon.png",
    "mySQL-icon.png",
    "javascript-icon.svg",
    "React-icon.png",
    "node.js-icon.png",
    "HTML-icon.png",
    "css-icon.png",
    "Sass-icon.png",
  ];
  return (
    <a id="about">
      <div className="about-container">
        <h2 className="header-1">About Me</h2>
        <div className="content content-1">
          <p>
            Hi my name is Johvonne Keane and I am a third year software
            engineering student at Ontario Tech University. I love coding,
            problem solving, and I am always looking for new challenges and ways
            to widen my skill set. I am a full stack web developer, and I love
            learning new frameworks as the tools for web developent continue to
            grow. Other than coding in my freetime I like to play piano, edit
            create/videos, and exercise.
          </p>
        </div>
        <h2 className="header-2">My Skill Set</h2>
        <div className="content-2">
          <Carousel slideNum={carouselImages.length} srcs={carouselImages} />
        </div>
      </div>
    </a>
  );
};

export default about;
