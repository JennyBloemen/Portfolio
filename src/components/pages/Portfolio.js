import React from "react";
import Projects from "../Projects";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Portfolio() {
  const projects = [
    {
      title: "GoGroom",
      description: "Animal grooming servies schedular built with: MERN stack",
      img: require(`../../assets/images/GoGroom.png`),
      github: "https://github.com/JennyBloemen/GoGroom",
    },
    {
      title: "FitCommit",
      description:
        "Restful API application built with: Node | Express | Handlebars | MySQL  Heroku ",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "https://github.com/JennyBloemen/FitCommit.git",
    },
    {
      title: "MuSearch",
      description:
        "Server-side application built with: Foundation Framework CSS | Rapid API | Javascript | HTML ",
      img: require(`../../assets/images/MuSearchDemo.gif`),
      github: "https://github.com/JennyBloemen/MuSearch.git",
    },
    {
      title: "Weather Dashboard",
      description:
        "Open API weather dashboard built with: HTML | Bootstrap | Local Storage",
      img: require(`../../assets/images/WeatherDashboard.png`),
      github: "https://github.com/JennyBloemen/JB-Weather.git",
    },
    {
      title: "Daily Work Schedular",
      description:
        "Hourly Scheduling application built with: HTML | CSS | jQuery",
      img: require(`../../assets/images/DailySchedular.png`),
      github: "https://github.com/JennyBloemen/JBSchedular.git",
    },
    {
      title: "Employee Tracker",
      description:
        "Command-line application built with:  Node.js | Inquirer | MySQL",
      img: require(`../../assets/images/EmployeeTrackingWalkthrough.gif`),
      github: "https://github.com/JennyBloemen/EmployeeTracking.git",
    },
  ];

  return (
    <div>
      <div class="portfolio-header">
        <h3>Coding Projects</h3>
      </div>
      <Carousel
        className="carosel_container"
        centerMode={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        // means to render carousel on server-side.
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        // border="secondary"
      >
        {projects.map((data, idx) => (
          <Projects data={data} key={idx} />
        ))}
      </Carousel>
    </div>
  );
}
