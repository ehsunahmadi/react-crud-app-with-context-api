import React, { useState, useContext } from "react";
import CategoryContext from "../context/CategoryContext";

const AddCategory = () => {
  console.log(useContext(CategoryContext));
  const { addCategory, loading } = useContext(CategoryContext);
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.length) {
      addCategory({ name: category, id: Date.now().toString() });
      setCategory("");
    }
  };
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="w-full mx-auto max-w-sm">
      <form
        className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="category"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            e.target.value.length < 30 && setCategory(e.target.value)
          }
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
