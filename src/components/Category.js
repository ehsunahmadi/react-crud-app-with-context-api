import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryContext from "../context/CategoryContext";
export const Category = ({ id, name }) => {
  const { removeCategory } = useContext(CategoryContext);
  return (
    <li className="flex flex-col sm:flex-row justify-between text-center text-gray-800 bg-gray-400 m-2 shadow-xs rounded">
      <span className="text-lg flex-shrink  px-4 py-2 my-2">{name}</span>
      <span>
        <Link to={`/edit/${id}`}>
          <button className="bg-yellow-400 px-4 py-2 m-2 hover:bg-yellow-500 font-bold rounded focus:outline-none focus:shadow-outline">
            Edit
          </button>
        </Link>
        <button
          className="bg-red-400 px-4 py-2 m-2 hover:bg-red-500 font-bold rounded focus:outline-none focus:shadow-outline"
          onClick={() => removeCategory(id)}
        >
          Remove
        </button>
      </span>
    </li>
  );
};
