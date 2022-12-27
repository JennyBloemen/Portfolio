import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer" bg="dark" variant="dark">
      <h4 className="footer-text">
        Made with{" "}
        <span
          className="emoji"
          role="img"
          aria-label="heart"
          aria-hidden="false"
        >
          ❤️
        </span>{" "}
        by Jenny Bloemen.
      </h4>
    </footer>
  );
};

export default Footer;

// w-100 mt-auto bg-secondary p-4
