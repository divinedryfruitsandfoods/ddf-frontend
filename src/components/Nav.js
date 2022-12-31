import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      {/* second navigation bar */}
      <nav className="flex items-center justify-between flex-wrap bg-customNav p-6">
        <NavLink to="/" className="flex items-center flex-shrink-0  mr-6 navBarLogo">
          <img alt="DDF logo" src="/images/logo.jpg" className="ddfLogo" />
          {/* <span className="font-semibold text-xm tracking-tight">Home</span> */}
        </NavLink>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded  border-orange-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <NavLink to="/allProducts" className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
              Products
            </NavLink>
            <NavLink to="/about" className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
              About
            </NavLink>
            <NavLink to="/contactus" className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
              Contact US
            </NavLink>
          </div>
          <div>
            <NavLink to="/login" className="inline-block text-sm px-4 py-2 leading-none   mt-4 lg:mt-0">
              Login
            </NavLink>
            <NavLink to="/register" className="inline-block text-sm px-4 py-2 leading-none  mt-4 lg:mt-0">
              Registration
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
