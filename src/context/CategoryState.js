import React, { useReducer } from "react";
import CategoryContext from "./CategoryContext";
import CategoryReducer from "./CategoryReducer";
import {
  SET_LOADING,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  EDIT_CATEGORY,
} from "./types";

const initialCategories = JSON.parse(localStorage.getItem("categories"));
const initialState = {
  loading: false,
  categories: initialCategories ? initialCategories : [],
  editMode: false,
};
const CategoryState = (props) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  // ACTIONS----------------------------------------------
  const setLoading = () => dispatch({ type: SET_LOADING });

  const addCategory = (category) => {
    setLoading();
    let currentCategories = JSON.parse(localStorage.getItem("categories"));
    if (!currentCategories) {
      currentCategories = [];
    }
    localStorage.setItem(
      "categories",
      JSON.stringify([...currentCategories, category])
    );

    dispatch({
      type: ADD_CATEGORY,
      payload: [...state.categories, category],
    });
  };

  const removeCategory = (id) => {
    setLoading();
    const filteredCategories = state.categories.filter((category) => {
      return category.id !== id;
    });
    localStorage.setItem("categories", JSON.stringify(filteredCategories));
    dispatch({
      type: REMOVE_CATEGORY,
      payload: filteredCategories,
    });
  };

  const editCategory = (editedCategory) => {
    setLoading();
    const filteredCategories = state.categories.filter((category) => {
      return category.id !== editedCategory.id;
    });
    const editedCategories = [...filteredCategories, editedCategory];
    localStorage.setItem("categories", JSON.stringify(editedCategories));
    dispatch({
      type: EDIT_CATEGORY,
      payload: editedCategories,
    });
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        addCategory,
        removeCategory,
        editCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
