import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logo from "../../photos/LOGO.png";
import Carousal from "../utils/carousal";
const index = () => {
  return (
    <div>
      <div className="image">
        <img src={Logo} alt="" />
      </div>
      <nav>
        <Link to="/">
          <li className="links">Home</li>
        </Link>
        <Link to="/about">
          <li className="links">About</li>
        </Link>
        <Link to="/gallery">
          <li className="links">Gallery</li>
        </Link>
        <Link to="/contact">
          <li className="links">Contact</li>
        </Link>
      </nav>
    </div>
  );
};

export default index;
