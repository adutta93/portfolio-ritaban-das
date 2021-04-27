import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import PhotoOne from "../../photos/home_slide_1.jpg";
import PhotoTwo from "../../photos/home_slide_2.jpg";

import "./carousal.css";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// const homePagePhotos = [
//   {
//     id: 1,
//     photoSrc: require("../../photos/home_slide_1.jpg"),
//   },
//   {
//     id: 2,
//     photoSrc: require("../../photos/home_slide_2.jpg"),
//   },
// ];

const carousal = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="photoSlide">
          <img src={PhotoOne} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="photoSlide" >
          <img src={PhotoTwo} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default carousal;
