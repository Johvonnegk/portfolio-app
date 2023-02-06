import React from "react";
import Reel from "../../components/reel/reel";
const projects = () => {
  const reelImages = [
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
    <a id="projects">
      <Reel displayCount={3} reelLength={reelImages.length} srcs={reelImages} />
    </a>
  );
};

export default projects;
