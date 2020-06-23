import React, { useState, useContext, useEffect } from "react";
import CategoryContext from "../context/CategoryContext";
import { Redirect } from "react-router-dom";

const EditCategory = ({ match }) => {
  const { id } = match.params;
  const [category, setCategory] = useState("");
  const { categories, editCategory, loading } = useContext(CategoryContext);
  const [edited, setEdited] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    editCategory({ name: category, id });
    setEdited(true);
  };

  useEffect(() => {
    const categoryToEdit = categories.find((category) => {
      return category.id === id;
    });
    setCategory(categoryToEdit.name);
  }, [categories, id]);

  if (edited) {
    return <Redirect to="/" />;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="container mx-auto mt-10">
      <div className="w-full mx-auto max-w-sm">
        <form
          className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            className="mb-4 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              e.target.value.length < 30 && setCategory(e.target.value)
            }
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
