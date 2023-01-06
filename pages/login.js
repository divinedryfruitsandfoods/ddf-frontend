import React from "react";
import Login from "../src/components/login/Login";
import Navbar from "../src/components/nav/Navbar";
import Footer from "../src/components/footer/Footer";

function login() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}

export default login;
