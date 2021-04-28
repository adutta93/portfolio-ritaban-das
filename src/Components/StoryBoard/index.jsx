import React from "react";
import Header from "../Header";

import KuKuMeymey from "../../photos/kukumeymey.jpg";
import StoryTwo from "../../photos/story-2.jpg";

import './index.css';

const index = () => {
  return (
    <div>
      <Header />

      <div className="container-story">
        <a href="https://www.youtube.com/watch?v=XXfB3vNLZL8">
          <img src={KuKuMeymey} alt="" />
        </a>

        <a href="https://www.youtube.com/watch?v=gPHZ7UvXje0">
          <img src={StoryTwo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default index;
