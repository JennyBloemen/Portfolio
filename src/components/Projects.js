import React from "react";
import Card from "react-bootstrap/Card";

export default function Projects({ data }) {
  const { title, description, img, github, deployed } = data;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Github:{github}</Card.Link>
          <Card.Link href="#">Deployed:{deployed}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
