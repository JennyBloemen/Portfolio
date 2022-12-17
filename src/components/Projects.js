import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Projects({ data }) {
  const { title, description, img, github } = data;
  return (
    <Card className="m-3" style={{ Width: "25rem", Height: "25rem" }}>
      <Card.Img
        variant="top"
        src={img}
        style={{ Width: "25rem", Height: "25rem" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* //need to figure out button link  */}
        <div className="d-grid gap-2">
          {/* <Link to="../../../Portfolio.js"></Link> */}
          <a href={github} target="_blank" rel="noreferrer"></a>
          <Button variant="secondary" size="sm">
            GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

//
