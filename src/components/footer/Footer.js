import React from "react";
import Link from "next/link";
const footerMain = "fixed inset-x-0 bothrefm-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800";
const footerSpanOne = "text-sm text-gray-500 sm:text-center dark:text-gray-400";
const footerLinkOne = " hover:underline";
const footerUl = "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0";
const mr4 = "mr-4";
const footerLinkTwo = "mr-4 hover:underline md:mr-6";

function Footer() {
  return (
    <footer className={footerMain}>
      <span className={footerSpanOne}>
        © 2022{" "}
        <Link href="/" className={footerLinkOne}>
          Divine Dry Fruits And Foods
        </Link>
        <Link href="/" exact className="nav-item nav-link">Home</Link>

        . All Rights Reserved.
      </span>
      <ul className={footerUl}>
        <li className={mr4}>
          <Link href="/about" className={footerLinkTwo}>
            About
          </Link>

        </li>
        <li className={mr4}>
          <Link href="/faq" className={footerLinkTwo}>
            FAQ
          </Link>
        </li>
        <li className={mr4}>
          <Link href="/products" className={footerLinkTwo}>
            Products
          </Link>
        </li>
        <li className={mr4}>
          <Link href="/contact" className={footerLinkOne}>
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
