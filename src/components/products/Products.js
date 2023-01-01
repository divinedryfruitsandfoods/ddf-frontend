import React, { useEffect, useState } from "react";

import Footer from "../Footer";
import CategoriesSlider from "../category/CategoriesSlider";
import ProductCard from "./ProductCard";
import axios from "axios";
export default function AllProducts() {
  const [categories, setCategories] = useState([]);
  useEffect(() => { getCategories(); }, [])
  const getCategories = async () => {
    const result = await axios.get("http://localhost:3333/categories");
    setCategories(result.data);
  }
  return (
    <>
      <section className="container m-auto my-5 mt-16">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 ...">
            <div className="swiper-container CategorieSlider !overflow-hidden">
              <CategoriesSlider categories={categories} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  mt-10 ">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
