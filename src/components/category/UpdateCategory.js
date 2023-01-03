import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
const updateCategoryForm = "p-6 flex flex-col justify-center";
const updateCategoryName = "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none";
const updateCategorySubmit = "md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300";
const updateCategoryNameDiv = "flex flex-col";
const updateSubCategoryNameDiv = "flex flex-col ";

export default function UpdateCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    id: id,
    categoryName: "",
    subCategoryName: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CategoryService.getCategoryById(category.id);
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateCategory = (e) => {
    e.preventDefault();
    console.log(category);
    CategoryService.updateCategory(category, id)
      .then((response) => {
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>

      <Popup visible={visible} onClose={() => setVisible(false)}>
        <form className={updateCategoryForm}>
          <div className={updateCategoryNameDiv}>
            <input type="name" name="categoryName" id="categoryName"
              value={category.categoryName}
              onChange={(e) => handleChange(e)}
              placeholder="Enter Category Name" className={updateCategoryName} />
          </div>
          <div className={updateSubCategoryNameDiv}>
            <input type="name" name="subCategoryName" id="subCategoryName"
              value={category.subCategoryName}
              onChange={(e) => handleChange(e)}
              placeholder="Enter Sub Category Name" className={updateCategoryName} />
          </div>
          <button type="submit"
            onClick={updateCategory}
            className={updateCategorySubmit}>
            Update
          </button>
          <button type="submit"
            onClick={() => navigate("/products")}
            className={updateCategorySubmit}>
            Cancel
          </button>
        </form>
      </Popup>
    </>
  );
}
