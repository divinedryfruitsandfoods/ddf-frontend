import React, { useState } from "react";
import Popup from "react-animated-popup";
import { useNavigate } from "react-router-dom";
import CategoryService from "../../services/CategoryService"
const addCategoryForm = "p-6 flex flex-col justify-center";
const addCategoryName = "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none";
const addCategorySubmit = "md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300";
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
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <form className={addCategoryForm}>
          <div className={addCategoryNameDiv}>
            <input type="name" name="categoryName" id="categoryName"
              value={category.categoryName}
              onChange={(e) => handleChange(e)}
              placeholder="Enter Category Name" className={addCategoryName} />
          </div>
          <div className={addSubCategoryNameDiv}>
            <input type="name" name="subCategoryName" id="subCategoryName"
              value={category.subCategoryName}
              onChange={(e) => handleChange(e)}
              placeholder="Enter Sub Category Name" className={addCategoryName} />
          </div>
          <button type="submit"
            onClick={saveCategory}
            className={addCategorySubmit}>
            Add
          </button>
        </form>
      </Popup>
    </>
  );
}
