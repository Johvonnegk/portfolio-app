import React from "react";
import "./about.scss";
import Reel from "../../components/reel/reel";
const about = () => {
  const reelInfo = [
    { src: "python-icon.png", itemDesc: "Python", id: "python" },
    { src: "java-logo.png", itemDesc: "Java", id: "java" },
    { src: "linux-icon.png", itemDesc: "Linux OS", id: "linux" },
    { src: "cprogramming-icon.png", itemDesc: "C programming", id: "c" },
    { src: "cplus-icon.png", itemDesc: "C++ programming", id: "c++" },
    { src: "mySQL-icon.png", itemDesc: "MySQL", id: "mySql" },
    { src: "javascript-icon.svg", itemDesc: "Javascript", id: "javascript" },
    { src: "React-icon.png", itemDesc: "React", id: "react" },
    { src: "HTML-icon.png", itemDesc: "HTML5", id: "html" },
    { src: "css-icon.png", itemDesc: "CSS", id: "css" },
    { src: "Sass-icon.png", itemDesc: "Sass", id: "sass" },
  ];
  console.log();
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="header-1">About Me</h2>
        <div className="content content-1">
          <p>
            Hi my name is Johvonne Keane and I am a third year software
            engineering student at Ontario Tech University. I love coding,
            problem solving, and I am always looking for new challenges and ways
            to widen my skill set. I am a full stack developer, and I love
            learning new frameworks as the tools for web developent continue to
            grow. Other than coding in my freetime I like to play piano, edit
            create/videos, and exercise. <br />
            Below are a few programming tools such as programming langauges,
            scripting languges, operating systems, and frameworks that I am very
            comfortable to use for developent.
          </p>
        </div>
        <h2 className="header-2">My Skill Set</h2>
        <div className="content-2">
          <Reel
            displayCount={3}
            reelLength={reelInfo.length}
            reelInfo={reelInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default about;
