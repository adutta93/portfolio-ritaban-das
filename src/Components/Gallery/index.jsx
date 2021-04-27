import React from "react";
import Header from "../Header/";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

// images import
import Beatles from "../../photos/beatles.jpg";
import Devil from "../../photos/devil.jpg";
import Easter from "../../photos/easter_1.b.jpg";
import Fox from "../../photos/fox.jpg";
import KongZilla from "../../photos/Kong-Zilla.jpg";
import Metallica from "../../photos/metallica.jpg";
import RazDee from "../../photos/razdee.jpg";
import Robot from "../../photos/robot.jpg";
import SchoolOfRock from "../../photos/school-of-rock.jpg";
import Sista from "../../photos/sista.jpg";
import SoccerDad from "../../photos/soccer-dad.jpg";
import TorontoStudio from "../../photos/toronto-studio.jpg";
import "./index.css";

const index = () => (
  <div>
    <Header />
    <div className="container">
      <div>
        <Gallery>
          <Item original={Beatles} thumbnail={Beatles} width="600" height="768">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Beatles} />}
          </Item>

          <Item original={Devil} thumbnail={Devil} width="600" height="768">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Devil} />}
          </Item>

          <Item original={Easter} thumbnail={Easter} width="600" height="768">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Easter} />}
          </Item>

          <Item original={Fox} thumbnail={Fox} width="600" height="768">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Fox} />}
          </Item>

          <Item
            original={KongZilla}
            thumbnail={KongZilla}
            width="600"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={KongZilla} />
            )}
          </Item>

          <Item
            original={Metallica}
            thumbnail={Metallica}
            width="600"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={Metallica} />
            )}
          </Item>

          <Item original={RazDee} thumbnail={RazDee} width="600" height="768">
            {({ ref, open }) => <img ref={ref} onClick={open} src={RazDee} />}
          </Item>

          <Item original={Robot} thumbnail={Robot} width="600" height="768">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Robot} />}
          </Item>

          <Item
            original={SchoolOfRock}
            thumbnail={SchoolOfRock}
            width="600"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={SchoolOfRock} />
            )}
          </Item>

          <Item original={Sista} thumbnail={Sista} width="600" height="768">
            {({ ref, open }) => <img ref={ref} onClick={open} src={Sista} />}
          </Item>

          <Item
            original={SoccerDad}
            thumbnail={SoccerDad}
            width="600"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={SoccerDad} />
            )}
          </Item>

          <Item
            original={TorontoStudio}
            thumbnail={TorontoStudio}
            width="600"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={TorontoStudio} />
            )}
          </Item>
        </Gallery>
      </div>
    </div>
  </div>
);

export default index;
