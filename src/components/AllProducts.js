import React from "react";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, Radio } from "@material-tailwind/react";
import Nav from "./Nav";
import Footer from "./Footer";
export default function AllProducts() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <section className="container m-auto my-5">
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <Fragment>
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>Categories</AccordionHeader>
                <AccordionBody>
                  <div className="flex gap-12">
                    <Radio id="almonds" name="type" label="Almonds" defaultChecked />
                  </div>
                  <div className="flex gap-12">
                    <Radio id="cashew" name="type" label="Cashew" />
                  </div>
                  <div className="flex gap-12">
                    <Radio id="pista" name="type" label="Pista" />
                  </div>
                  <div className="flex gap-12">
                    <Radio id="dates" name="type" label="Dates" />
                  </div>
                  <div className="flex gap-12">
                    <Radio id="angeer" name="type" label="Anjeer" />
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>Sort</AccordionHeader>
                <AccordionBody>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.</AccordionBody>
              </Accordion>
            </Fragment>
          </div>
          <div className="col-span-3 ...">
            <div className="swiper-container !overflow-hidden">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  mt-10 ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
                <div className="costPrice">
                  <b>&#8377; 1000/kg</b> <strike>&#8377; 10000</strike>{" "}
                </div>
                <div className="px-3">
                  <div className="font-bold text-xl">California Almonds</div>
                </div>
                <div className="px-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
