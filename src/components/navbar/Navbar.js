import React from "react";
import "./Navbar.scss";
const navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#welcome">Welcome</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">My Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
