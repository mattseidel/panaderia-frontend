import {
  ADD_RECIPES,
  DELETE_RECIPES,
  GET_RECIPES,
  RECIPES_LOADING
} from "../action/types";

const initialState = {
  recipes: [{idProducto: 0, nombre:'',producto:'', comentarios:'',ulima_modificacion:'' }],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      console.log(action.payload)
      if (action.payload.length !== 0)
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
      else return {...state, loading: false}
    case DELETE_RECIPES:
      return {
        ...state,
        recipes: state.recipes.filter((d) => d.idProducto !== action.payload),
      };
    case ADD_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, action.payload.recipe[0]],
      };
    case RECIPES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
