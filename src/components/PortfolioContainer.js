import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import "../../src/App.css";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
