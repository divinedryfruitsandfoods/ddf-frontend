import React, { useState } from "react";
import Popup from "react-animated-popup";
const addCategoryForm = "p-6 flex flex-col justify-center";
const addCatrgoryName = "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none";
const addCategorySubmit = "md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300";
const addCategoryNameDiv = "flex flex-col";
const addSubCategoryNameDiv = "flex flex-col mt-2";

export default function AddCategory({ visible, setVisible }) {
  return (
    <>
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <form className={addCategoryForm}>
          <div className={addCategoryNameDiv}>
            <input type="name" name="name" id="name" placeholder="Enter Category Name" className={addCatrgoryName} />
          </div>
          <div className={addSubCategoryNameDiv}>
            <input type="email" name="email" id="email" placeholder="Enter Sub Category Name" className={addCatrgoryName} />
          </div>
          <button type="submit" className={addCategorySubmit}>
            Submit
          </button>
        </form>
      </Popup>
    </>
  );
}
