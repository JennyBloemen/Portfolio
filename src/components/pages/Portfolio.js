import React, { Component, useState } from "react";
import Project from "../Projects";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Project 1",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      name: "Project 2",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
  ]);
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        {/* flex here */}
        {projects.map((data, idx) => (
          <Project data={data} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
