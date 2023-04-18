import React from "react";

// bootstrap imports for css styling
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//background image
import image from "../../assets/images/IMG_4846.png";

// profile image
import jenb from "../../assets/images/JennyB.JPG";

// skill images
import js from "../../assets/images/javascript.png";
import hk from "../../assets/images/heroku.png";
import hhhh from "../../assets/images/html5.png";
import mysql from "../../assets/images/mysql.png";
import react from "../../assets/images/react.png";
import mongo from "../../assets/images/mongodb.png";
import boot from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css3.png";
import node from "../../assets/images/nodejs.png";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Container className="about" fluid="md" mt-10>
          <Row xs={3}>
            <Col xs>
              <img
                rounded
                src={jenb}
                class="img-thumbnail"
                alt="Jenny Headshot"
                width={350}
                height={350}
              ></img>
            </Col>

            <Col xs={6}>
              <h2>
                <span className="hello">Hello,</span> welcome to my portfolio!
              </h2>
              <p>
                I am a full stack web developer (MERN stack) with a background
                in customer service, planning, and implementation. I am
                passionate about technology and continued education. I reside in
                Syracuse, Ut and I'm a mountain girl who also loves the ocean
                and my family! In my spare time I like to craft, garden, travel,
                and read. 
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="about">
          <Row>
            <Col className="skills">Skills:</Col>
            <Col>
              <img src={hhhh} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={css} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={js} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={hk} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={mysql} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={mongo} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={react} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={boot} width={48} height={48}></img>
            </Col>
            <Col>
              <img src={node} width={48} height={48}></img>
            </Col>
          </Row>
        </Container>
        {/* <Footer>Created by JennyB for JennyB</Footer> */}
      </div>
    </div>
  );
}
