import React from "react";
import Projects from "../Projects";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
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
    // const [projects, setProjects] = useState([
    {
      title: "Project 1",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 3",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 4",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 5",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 6",
      description: "description",
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
      github: "link",
      deployed: "link",
    },
    {
      title: "Project 7",
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
        {projects.map((data, idx) => (
          <Projects data={data} key={idx} />
        ))}
      </Carousel>
      <div className="portfolio-header">
        <h3>Design Work</h3>
        <p></p>
      </div>
    </div>
  );
}
