import React from "react";
import Faq from "./Faq";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Slider />
      <FeaturedProducts />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
