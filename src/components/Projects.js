import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Projects({ data }) {
  const { title, description, img, github } = data;
  return (
    <div className="row">
      <div className="col">
        <Card className="m-3" style={{ height: "370px" }}>
          <Card.Img
            variant="top"
            src={img}
            style={{ width: "100%", height: "180px" }}
          />
          <Card.Body className="align-items-end pb-1">
            <Card.Title>{title}</Card.Title>
            <Card.Text
              className="card-text"
              style={{ height: "70px", maxHeight: "70px" }}
            >
              {description}
            </Card.Text>

            <div className="d-grid gap-2 justify-content-center d-flex">
              <a href={github} target="_blank" rel="noreferrer">
                <Button
                  className="gh-button"
                  variant="secondary mt-auto"
                  size="sm"
                >
                  GitHub
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
