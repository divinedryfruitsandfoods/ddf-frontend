import React, { useState } from "react";
import Popup from "react-animated-popup";
import { useNavigate } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
const addCategoryForm = "flex flex-col text-center";
const addCategoryName = "text-white text-xs w-30 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none";
const addCategorySubmit =
  " mr-2 rounded-lg text-xs px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white";
const addCategoryNameDiv = "flex flex-col";
const addSubCategoryNameDiv = "flex flex-col ";

export default function AddCategory({ visible, setVisible }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    id: "",
    categoryName: "",
    subCategoryName: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };

  const saveCategory = (e) => {
    e.preventDefault();
    CategoryService.saveCategory(category)
      .then((response) => {
        console.log(response);
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Popup visible={visible} onClose={() => setVisible(false)} className="addCategoryPopup">
        <form className={addCategoryForm}>
          <h1>Add New Category</h1>
          <div className={addCategoryNameDiv}>
            <input type="name" name="categoryName" id="categoryName" value={category.categoryName} onChange={(e) => handleChange(e)} placeholder="Enter Category Name" className={addCategoryName} />
          </div>
          <div className={addSubCategoryNameDiv}>
            <input type="name" name="subCategoryName" id="subCategoryName" value={category.subCategoryName} onChange={(e) => handleChange(e)} placeholder="Enter Sub Category Name" className={addCategoryName} />
          </div>
          <div className="mt-3 inline-flex shadow-sm px-6" role="grpup">
            <button type="submit" onClick={saveCategory} className={addCategorySubmit}>
              Add
            </button>
            <button type="button" onClick={() => setVisible(false)} className={addCategorySubmit}>
              Close
            </button>
          </div>
        </form>
      </Popup>
    </>
  );
}
