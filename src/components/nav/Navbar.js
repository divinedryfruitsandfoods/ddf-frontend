import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className=" shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <h3 className=" font-bold text-xl cursor-pointer">
                    DDF
                  </h3>
                  <Link href="/about" >
                    About
                  </Link>

                  <Link href="/products" >
                    Products
                  </Link>

                  <Link href="/faq" >
                    Faq
                  </Link>


                  <Link href="/contact" >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;