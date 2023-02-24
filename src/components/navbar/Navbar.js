import React from "react";
import "./Navbar.scss";
const navbar = () => {
  //hamburger code
  const hamburger = document.getElementsByClassName("hamburger");
  const navMenu = document.getElementsByClassName("nav-menu");

  // hamburger.addEventListener("click", (e) => {
  // e.target.classList.toggle("active");
  // navMenu.classList.toggle("active");
  // });
  // e.target.classList.toggle("active");

  // document.querySelectorAll("nav-link").forEach((element) =>
  //   element.addEventListener("click", () => {
  //     hamburger.classList.remove("active");
  //     navMenu.classList.remove("active");
  //   })
  // );
  function hamburgerClick(e) {
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
