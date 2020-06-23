import {
  SET_LOADING,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  EDIT_CATEGORY,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case EDIT_CATEGORY:
      console.log();
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
