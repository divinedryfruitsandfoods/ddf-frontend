import React from "react";

const productHashtagStyles = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";
const productCardStyles = "max-w-sm rounded overflow-hidden shadow-lg";
const productCardNameStyles = "font-bold text-xl";
const productCardCostPriceStyles = "costPrice";
const p3 = "px-3";
const wFull = "w-full";
function ProductCard({ products }) {
  return (
    <>
      {products &&
        products.map((product, index) => {
          return (
            <div className={productCardStyles} key={index}>
              <img className={wFull} src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
              <div className={productCardCostPriceStyles}>
                <b>&#8377; 1000/kg</b> <strike>&#8377; 10000</strike>
              </div>
              <div className={p3}>
                <div className={productCardNameStyles}>{product.productName}s</div>
              </div>
              <div className={p3}>{product.productDescription} </div>
              <div className={p3}>
                select quantity
                <span className={productHashtagStyles}>#travel</span>
                <span className={productHashtagStyles}>#travel</span>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ProductCard;
