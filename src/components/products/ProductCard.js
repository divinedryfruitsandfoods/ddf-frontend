import React from "react";

function ProductCard() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
        <div className="costPrice">
          <b>&#8377; 1000/kg</b> <strike>&#8377; 10000</strike>{" "}
        </div>
        <div className="px-3">
          <div className="font-bold text-xl">California Almonds</div>
        </div>
        <div className="px-3">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
