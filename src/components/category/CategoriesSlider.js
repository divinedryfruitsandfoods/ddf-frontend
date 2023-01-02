import React, { useState } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import AddCategory from "./AddCategory";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

const buttonStyle = {
  backgroundColor: "cadetblue",
  color: "#fff",
  padding: 10,
  cursor: "pointer",
};

const pStyle = {
  textAlign: "center",
};

const addCategoryStyles = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-0 px-1 border border-blue-500 hover:border-transparent rounded";
const updateCategoryStyles = "bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-0 px-1 border border-green-500 hover:border-transparent rounded";
const deleteCategoryStyles = "bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-0 px-1 border border-red-500 hover:border-transparent rounded";
const categorySliderBlockquote = "rounded-lg bg-gray-100 p-2";
const categorySliderFlexItems = "flex items-center";
const categoryName = "mt-1 text-lg font-medium text-gray-700";
const mt4 = "ml-4";
function CategoriesSlider({ categories }) {
  const [visible, setVisible] = useState(false);
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
        {categories &&
          categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <blockquote className={categorySliderBlockquote}>
                <div className={categorySliderFlexItems}>
                  <div className={mt4}>
                    <p className={categoryName}> {cat.category_name}</p>
                    <div style={buttonStyle} onClick={() => setVisible(!visible)}>
                      Show popup!
                    </div>
                    <NavLink to="/products/addcategory">
                      <button className={addCategoryStyles}>
                        <MdAddShoppingCart />
                        <AddCategory visible={visible} />
                      </button>
                    </NavLink>
                    <NavLink to="/products/updatecategory">
                      <button className={updateCategoryStyles}>
                        <GrUpdate />
                      </button>
                    </NavLink>
                    <button className={deleteCategoryStyles}>
                      <AiOutlineDelete />
                    </button>
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
