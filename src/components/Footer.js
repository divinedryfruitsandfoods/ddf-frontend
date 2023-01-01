import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <NavLink to="/" className=" hover:underline hover:underline">
          Divine Dry Fruits And Foods
        </NavLink>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="mr-4">
          <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/about" className="mr-4 hover:underline md:mr-6">
            FAQ
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/products" className="mr-4 hover:underline md:mr-6">
            Products
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
