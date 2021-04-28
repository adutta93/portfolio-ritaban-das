import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logo from "../../photos/LOGO.png";
// import Carousal from "../utils/carousal";
const index = () => {
  return (
    <div>
      <div className="image">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav>
        <Link to="/">
          <li className="links">Home</li>
        </Link>
        <Link to="/about">
          <li className="links">About</li>
        </Link>
        <Link to="/gallery">
          <li className="links">Illustration</li>
        </Link>
        <Link to="/story-board">
          <li className="links">Storyboard</li>
        </Link>
        <Link to="/contact">
          <li className="links link-last">Contact</li>
        </Link>
      </nav>
    </div>
  );
};

export default index;
