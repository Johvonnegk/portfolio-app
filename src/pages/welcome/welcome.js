import React from "react";
import "./welcome.scss";
const welcome = () => {
  return (
    <section id="welcome">
      <div className="welcome-container">
        <h1 className="sectional-header">Welcome to My Portfolio Website</h1>
        <div className="content content-1">
          <p>
            Hi my name is Johvonne Keane, and this is my portfolio website. I
            made this website myself with React.js and no CSS frameworks. Here
            you can find links to <a href="#projects">past projects</a> I've
            worked on, a quick introduction <a href="#about">about me</a>, and
            my
            <a href="#contact"> contact information</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default welcome;
