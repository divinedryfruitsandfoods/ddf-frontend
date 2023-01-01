import React from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { MdAddShoppingCart } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
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
            slidesPerView: 5,
          },
        }}
        slidesPerView={3}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <blockquote className="rounded-lg bg-gray-100 p-2">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="mt-1 text-lg font-medium text-gray-700" > {cat.category_name}</p>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-0 px-1 border border-blue-500 hover:border-transparent rounded">
                    <MdAddShoppingCart />
                  </button>
                  <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-0 px-1 border border-green-500 hover:border-transparent rounded" ><GrUpdate /></button>
                  <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-0 px-1 border border-red-500 hover:border-transparent rounded" ><AiOutlineDelete /></button>
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
