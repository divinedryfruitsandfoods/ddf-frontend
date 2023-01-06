import React from "react";
const fpSection = "container mx-auto py-5";
const fpHeading = "text-center text-4xl font-bold tracking-tight sm:text-5xl";
const fpProDiv = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  mt-10 ";
const fpPro1 = "max-w-sm rounded overflow-hidden shadow-lg";
const wFull = "w-full";
const fpOneName = "px-6 py-4";
const fpProName = "font-bold text-xl mb-2";
const fpProDesc = "text-gray-700 text-base";
const fpProHash = "px-6 pt-4 pb-2";
const fpProHashTags = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";

function FeaturedProducts() {
  return (
    <section className={fpSection}>
      <h2 className={fpHeading}>Featured Products</h2>

      <div className={fpProDiv}>
        <div className={fpPro1}>
          <img className={wFull} src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
          <div className={fpOneName}>
            <div className={fpProName}>The Coldest Sunset</div>
            <p className={fpProDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className={fpProHash}>
            <span className={fpProHashTags}>#photography</span>
            <span className={fpProHashTags}>#travel</span>
            <span className={fpProHashTags}>#winter</span>
          </div>
        </div>

        <div className={fpPro1}>
          <img className={wFull} src="http://kolambkarashutosh.000webhostapp.com/al/img/product_02.png" alt="Sunset in the mountains" />
          <div className={fpOneName}>
            <div className={fpProName}>The Coldest Sunset</div>
            <p className={fpProDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className={fpProHash}>
            <span className={fpProHashTags}>#photography</span>
            <span className={fpProHashTags}>#travel</span>
            <span className={fpProHashTags}>#winter</span>
          </div>
        </div>
        <div className={fpPro1}>
          <img className={wFull} src="http://kolambkarashutosh.000webhostapp.com/al/img/product_03.png" alt="Sunset in the mountains" />
          <div className={fpOneName}>
            <div className={fpProName}>The Coldest Sunset</div>
            <p className={fpProDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className={fpProHash}>
            <span className={fpProHashTags}>#photography</span>
            <span className={fpProHashTags}>#travel</span>
            <span className={fpProHashTags}>#winter</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
