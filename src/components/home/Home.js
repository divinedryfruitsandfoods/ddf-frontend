import React from "react";
import FeaturedProducts from "../FeaturedProducts";
import Slider from "../Slider";
import Testimonials from "../Testimonials";
import Contact from "../contact/Contact";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";
import { useState } from "react";

function Home() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <Navbar />
      <Slider />
      <FeaturedProducts />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
