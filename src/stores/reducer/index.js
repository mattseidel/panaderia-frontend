import { combineReducers } from "redux";
import authReducer from "./authentication";
import errorReducer from "./error";
import recipeReducer from "./recipes";
import categoriesReducer from "./categories";
import detailReducer from "./recetaDetalles";
import materiaPrimaReducer from "./materiaPrima";

let store = combineReducers({
  auth: authReducer,
  error: errorReducer,
  receta: recipeReducer,
  categoria: categoriesReducer,
  detallesReceta: detailReducer,
  materiaPrima: materiaPrimaReducer,
});

export default store;
