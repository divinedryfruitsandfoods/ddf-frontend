import React from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdAddShoppingCart } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { NavLink, Outlet } from "react-router-dom";
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
        {categories && categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <blockquote className="rounded-lg bg-gray-100 p-2">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="mt-1 text-lg font-medium text-gray-700" > {cat.category_name}</p>

                  <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                    Toggle modal
                  </button>

                  <div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="relative w-full h-full max-w-md md:h-auto">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                          <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                          <button data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Yes, I'm sure
                          </button>
                          <button data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavLink to="/products/addcategory">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-0 px-1 border border-blue-500 hover:border-transparent rounded">
                      <MdAddShoppingCart />
                    </button>
                  </NavLink>


                  <NavLink to="/products/updatecategory">
                    <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-0 px-1 border border-green-500 hover:border-transparent rounded" ><GrUpdate /></button>
                  </NavLink>
                  <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-0 px-1 border border-red-500 hover:border-transparent rounded" ><AiOutlineDelete /></button>
                  <Outlet />
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
