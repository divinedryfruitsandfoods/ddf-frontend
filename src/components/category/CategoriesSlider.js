import React from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

function CategoriesSlider() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        autoplay
        spaceBetween={10}
        breakpoints={{
          0: {
            // width: 576,
            slidesPerView: 1,
          },
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center">
              <div className="ml-4">
                <p className="mt-1 text-lg font-medium text-gray-700">Almonds</p>
              </div>
            </div>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center">
              <div className="ml-4">
                <p className="mt-1 text-lg font-medium text-gray-700">Cashew</p>
              </div>
            </div>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center">
              <div className="ml-4">
                <p className="mt-1 text-lg font-medium text-gray-700">Pista</p>
              </div>
            </div>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center">
              <div className="ml-4">
                <p className="mt-1 text-lg font-medium text-gray-700">Anjeer</p>
              </div>
            </div>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center">
              <div className="ml-4">
                <p className="mt-1 text-lg font-medium text-gray-700">Dates</p>
              </div>
            </div>
          </blockquote>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CategoriesSlider;
