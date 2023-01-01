import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Slider() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="object-fill w-full h-full" src="http://kolambkarashutosh.000webhostapp.com/al/img/home-banner.png" alt="image slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-contain w-full h-full" src="http://kolambkarashutosh.000webhostapp.com/al/img/home-banner2.png" alt="image slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-contain w-full h-full" src="http://kolambkarashutosh.000webhostapp.com/al/img/home-banner3.png" alt="image slide 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
