import React, { useState } from "react";
import Projects from "../Projects";

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
  ];
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        {/* flex here */}
        {projects.map((data, idx) => (
          <Projects data={data} key={idx} />
        ))}
      </div>
    </div>
  );
}
