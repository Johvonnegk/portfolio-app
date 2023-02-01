import React from "react";
import "./welcome.scss";
const welcome = () => {
  return (
    <a id="welcome">
      <div className="welcome-container">
        <h1 className="sectional-header">Welcome to My Portfolio Website</h1>
        <div className="content content-1">
          <p>
            Hi my name is Johvonne Keane, and this is my portfolio website. Here
            you can find links to <a href="">past projects</a> I've worked on, a
            quick introduction <a href="#about">about me</a>, and my
            <a href=""> contact information</a>.
          </p>
        </div>
      </div>
    </a>
  );
};

export default welcome;
