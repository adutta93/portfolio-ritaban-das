import React from "react";
import Footer from "../Footer";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";
import Header from "../Header/";
import "./index.css";
import DP from "../../photos/profile_dp.jpg";
const index = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <img src={DP} alt="" />
        <div className="details">
          <p>
            Hi there! Feel free to your hellos or ask me any questions <br />{" "}
            through my email id: ronnie1234321@gmail.com.
            <br /> <br />
            Phone: +1 506 545 7022 cell: +1 506 480 1429
            <br /> <br />
            FIND ME, FOLLOW ME, BE MY FRIEND AT :
            <br /> <br />
            <div className="socialMedia">
              <a className="fb" href="https://www.facebook.com/ronnithereaper">
                <AiFillFacebook size={50} color="blue" />
              </a>

              <a href="https://www.instagram.com/ritabandas/">
                <AiFillInstagram size={50} color="#DD2A7B" />
              </a>
              <a href="https://www.linkedin.com/in/ritaban-dass-b0aa2732/">
                <AiFillLinkedin size={50} color="#0e76a8" />
              </a>
              <a href="https://www.artstation.com/ronniethereaper">
                <FaArtstation size={50} color="#000000" />
              </a>
            </div>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
