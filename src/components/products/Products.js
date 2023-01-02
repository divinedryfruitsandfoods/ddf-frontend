import React, { useEffect, useState } from "react";

import Footer from "../Footer";
import CategoriesSlider from "../category/CategoriesSlider";
import ProductCard from "./ProductCard";
import axios from "axios";

const productsSection = "container m-auto my-5 mt-16";
const productsSectionGrid = "grid grid-cols-1";
const productSliderColspan3 = "col-span-3";
const swiperCategory = "swiper-container CategorieSlider !overflow-hidden";
const productCardStyle = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  mt-10 ";

export default function AllProducts() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const result = await axios.get("http://localhost:3333/categories").catch((err) => {
      console.log(err.message);
    });
    setCategories(result.data);
  };

  return (
    <>
      <section className={productsSection}>
        <div className={productsSectionGrid}>
          <div className={productSliderColspan3}>
            <div className={swiperCategory}>
              <CategoriesSlider categories={categories} />
            </div>
            <div className={productCardStyle}>
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
