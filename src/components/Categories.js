import React from "react";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";

const Categories = () => {
  return (
    <div className="container mx-auto mt-10">
      <AddCategory />
      <CategoryList />
    </div>
  );
};

export default Categories;
