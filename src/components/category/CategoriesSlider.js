import React, { useState } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";
import UpdateCategory from "./UpdateCategory";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

const buttonStyle = {
  cursor: "pointer",
  background: "#444",
  textAlign: "right",
  float: "right",
  padding: "5px",
  borderRadius: "10px",
  boxShadow: "1px 1px 1px 1px #ccc",
};

const pStyle = {
  textAlign: "center",
};

const updateCategoryStyles = "bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-0 px-1 border border-green-500 hover:border-transparent rounded";
const deleteCategoryStyles = "bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-0 px-1 border border-red-500 hover:border-transparent rounded";
const categorySliderBlockquote = "rounded-lg bg-gray-100 p-2";
const categorySliderFlexItems = "flex items-center";
const categoryName = "mt-1 text-lg font-medium text-gray-700";
const mt4 = "ml-4";
function CategoriesSlider({ categories, deleteCategory }) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const updateCategory = (e, id) => {
    e.preventDefault();
    navigate(`/products/updateCategory/${id}`);
  };

  return (
    <>
      <div style={buttonStyle} onClick={() => setVisible(!visible)}>
        <NavLink to="/products/addcategory">
          <MdAddShoppingCart />
        </NavLink>
        <AddCategory visible={visible} setVisible={setVisible} />
      </div>
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
            slidesPerView: 3,
          },
          1024: {
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
                    <p className={categoryName}> {cat.categoryName}</p>
                    <button
                      onClick={(e, id) => updateCategory(e, cat.id)}
                      className={updateCategoryStyles}>
                      <GrUpdate />
                    </button>
                    <button className={deleteCategoryStyles}>
                      <AiOutlineDelete onClick={(e, id) => deleteCategory(e, cat.id)} />
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
