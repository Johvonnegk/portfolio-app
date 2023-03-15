import React from "react";
import "./Navbar.scss";
const navbar = () => {
  //hamburger code
  const hamburger = document.getElementsByClassName("hamburger");
  const navMenu = document.getElementsByClassName("nav-menu");

  function hamburgerClick(e) {
    if (e.target.parentNode.classList.contains("navbar")) {
      e.target.classList.toggle("active");
      e.target.nextElementSibling.classList.toggle("active");
      return;
    }
    e.target.parentNode.classList.toggle("active");
    e.target.parentNode.nextElementSibling.classList.toggle("active");
  }

  function closeHamburgerMenu(e) {
    if (e.target.parentNode.parentNode.classList.contains("active")) {
      e.target.parentNode.parentNode.classList.toggle("active");
      e.target.parentNode.parentNode.previousElementSibling.classList.toggle(
        "active"
      );
    }
  }

  return (
    <div className="navbar">
      <div className="hamburger" onClick={(e) => hamburgerClick(e)}>
        <div className="bar"></div>
      </div>

      <ul className="nav-menu" onClick={(e) => closeHamburgerMenu(e)}>
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
