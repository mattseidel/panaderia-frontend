import { GET_MATERIA_PRIMA, ADD_MATERIA } from "../action/types";

const initialState = {
  materia: [{ idProducto: "", idMateria: "", cantidad: "", comentarios: "" }],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATERIA_PRIMA:
      return {
        ...state,
        isLoading: false,
        materia: action.payload,
      };
    case ADD_MATERIA:
      return{
        ...state,
        materia: [...state.materia, action.payload.receta[0]]
      }
    default:
      return state;
  }
}
