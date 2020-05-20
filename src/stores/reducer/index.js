import { combineReducers } from "redux";
import authReducer from "./authentication";
import errorReducer from "./error";
import recipeReducer from "./recipes";

let store = combineReducers({
  auth: authReducer,
  error: errorReducer,
  receta: recipeReducer,
});

export default store;
