import React from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

function CategoriesSlider({ categories }) {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        autoplay
        spaceBetween={5}
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
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="mt-1 text-lg font-medium text-gray-700" > {cat.category_name}</p>
                </div>
              </div>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CategoriesSlider;
