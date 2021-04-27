import React from "react";
import Header from "../Header/";
import './index.css'
import DP from "../../photos/profile_dp.jpg";
const index = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <img src={DP} alt="" />
        <div className="about">
          <p>
            A character designer, illustrator and storyboard artist working in
            the animation & gaming industry for the past 10 years, Ritaban Das
            is a holistic all-in-one designer. His work is mostly
            character-driven, where he blends in humour and graphic designing,
            wanting to convey a story with every character that he creates.
            Ritaban as a visual communication artist feels that it is important
            to portray a complete story or image to the reader and keeping this
            in mind he tries to narrate stories in a single frame. He was named
            in one of the top 30 Indian Illustrators according to Creative Gaga
            in 2021. He's currently based in Toronto, Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
