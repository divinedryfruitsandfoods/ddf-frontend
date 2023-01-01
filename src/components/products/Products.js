import React from "react";

import Footer from "../Footer";
import CategoriesAccordion from "../category/CategoriesAccordion";
import CategoriesSlider from "../category/CategoriesSlider";
import ProductCard from "./ProductCard";
export default function AllProducts() {
  return (
    <>
      <section className="container m-auto my-5 mt-16">
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <CategoriesAccordion />
          </div>
          <div className="col-span-3 ...">
            <div className="swiper-container CategorieSlider !overflow-hidden">
              <CategoriesSlider />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  mt-10 ">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
