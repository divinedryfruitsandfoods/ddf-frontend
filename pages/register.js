import React from "react";
import Register from "../src/components/register/Registration";
import Navbar from "../src/components/nav/Navbar";
import Footer from "../src/components/footer/Footer";

function register() {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
}

export default register;
