import React from "react";
import Projects from "../Projects";
import Marketing from "../Projects";

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
      description: "Animal grooming servies schedular",
      img: require(`../../assets/images/dog.png`),
      github: "link",
    },
    {
      title: "FitCommit",
      description: "Restful API fitness schedular.",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "https://github.com/JennyBloemen/FitCommit.git",
    },
    {
      title: "MuSearch",
      description: "description",
      img: require(`../../assets/images/MuSearchDemo.gif`),
      github: "https://github.com/JennyBloemen/MuSearch.git",
    },
    {
      title: "Weather Dashboard",
      description: "Open API weather dashboard.",
      img: require(`../../assets/images/WeatherDashboard.png`),
      github: "https://github.com/JennyBloemen/JB-Weather.git",
    },
    {
      title: "Daily Work Schedular",
      description: "App to schedule each hour in the day",
      img: require(`../../assets/images/DailySchedular.png`),
      github: "https://github.com/JennyBloemen/JBSchedular.git",
    },
    {
      title: "Employee Tracker",
      description:
        "Command-line application using Node.js, Inquirer, and MySQL",
      img: require(`../../assets/images/EmployeeTrackingWalkthrough.gif`),
      github: "https://github.com/JennyBloemen/EmployeeTracking.git",
      // deployed: "link",
    },
  ];
  const marketing = [
    {
      title: "Baba Yaga",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      // deployed: "link",
    },
    {
      title: "Baba Yaga",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      // deployed: "link",
    },
    {
      title: "Baba Yaga",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      // deployed: "link",
    },
    {
      title: "Baba Yaga",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      // deployed: "link",
    },
  ];

  return (
    <div>
      <div class="portfolio-header">
        <h3>Coding Projects</h3>
        <p></p>
      </div>
      <Carousel
        className="carosel_container"
        centerMode={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {projects.map((data, idx) => (
          <Projects data={data} key={idx} />
        ))}
      </Carousel>
      {/* <br></br>
      <div className="portfolio-header">
        <h3>Marketing Design Work</h3>
        <p></p>
      </div>
      <Carousel
        className="carosel_container"
        centerMode={true}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {marketing.map((data, idx) => (
          <Projects data={data} key={idx} />
        ))}
      </Carousel> */}
    </div>
  );
}
