import React from "react";
import Carousel from "../../components/carousel/carousel";
import "./projects.scss";
const Projects = () => {
  const carouselInfo = [
    {
      src: "CMS project.png",
      itemDesc: (
        <p className="carousel-item-desc">
          <span>Course Management Web App </span> <hr /> In this project, I
          implemented a course management system (cms for short). It functions
          similarly to applications that schools currently use, which allows
          students, instructors, as well as administrators to manage and view
          course information with a modern look. <br />
          <br /> The planning phase of this project included the use of various
          UML diagram models as well as many software architecture techniques.{" "}
          <br /> <br />
          Languages and Frameworks Used: Javascript, React.js, Node.js, SCSS,
          HTML, Axios API, and MySQL
        </p>
      ),
      id: "cms",
    },
    {
      src: "rentral central.png",
      itemDesc: (
        <p className="carousel-item-desc">
          <span> Car Rental App </span> <hr />
          This project was an implementation of a car rental-service web
          application, similar to websites like Enterprise. However, this site
          differs from Enterprise as it allows other users besides those from
          the company itself to post their own vehicles to the site for renting.
          <br /> <br />
          Languages and Frameworks Used: Javascript, React.js, Node.js, SCSS,
          HTML, Axios API, and MongoDB
        </p>
      ),
      id: "rentral",
    },
  ];

  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <Carousel slideNum={carouselInfo.length} carouselInfo={carouselInfo} />
      </div>
    </section>
  );
};

export default Projects;
