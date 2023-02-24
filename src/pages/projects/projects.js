import React from "react";
import Carousel from "../../components/carousel/carousel";
import "./projects.scss";
const Projects = () => {
  const carouselInfo = [
    {
      src: "CMS project.png",
      itemDesc: (
        <p>
          <span>Course Management Web App </span> In this project I implemetned
          a course management system (cms for short), similar to applications
          that schools currently use that allows students, instructors, and as
          well as administrators to manage and view course information but with
          a more modern look. The planning phase of this project included the
          use of various UML diagram models as well as many software
          architecture techniques. <br />
          Languages and Frameworks Used: Javascript, React.js, Node.js, SCSS,
          HTML, Axios API, and MySQL
        </p>
      ),
      id: "cms",
    },
    {
      src: "rentral central.png",
      itemDesc: (
        <p>
          <span> Car Rental App </span>
          This project was an implementation of a car rental-service web
          application, similar to websites like Enterprise. However this site
          and Enterprise are different as this site allows other users other
          than the company itself to post their own vehicles to the site for
          renting.
          <br />
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
