import React, { useContext } from "react";
import { Category } from "./Category";
import CategoryContext from "../context/CategoryContext";

const CategoryList = () => {
  const { categories, loading } = useContext(CategoryContext);
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ul className="flex flex-col bg-gray-200 shadow-md rounded">
      {categories &&
        categories.map((category) => (
          <Category id={category.id} name={category.name} key={category.id} />
        ))}
    </ul>
  );
};

export default CategoryList;
