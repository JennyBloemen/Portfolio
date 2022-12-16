import React, { useState } from "react";
import Projects from "../Projects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  const projects = [
    // const [projects, setProjects] = useState([
    {
      title: "Project 1",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 2",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 2",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 2",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 2",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 2",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
  ];
  return (
    <div>
      <div class="portfolio-header">
        <h3>Coding Projects</h3>
        <p></p>
      </div>
      <div class="portfolio-container">
        {projects.map((data, idx) => (
          <Projects data={data} key={idx} />
        ))}
      </div>
      <div class="portfolio-header">
        <h3>Design Work</h3>
        <p></p>
      </div>
    </div>
  );
}
// md={{ span: 6, offset: 3 }}
