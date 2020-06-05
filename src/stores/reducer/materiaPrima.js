import { GET_MATERIA_PRIMA, ADD_MATERIA } from "../action/types";

const initialState = {
  materia: [
    {
      nombre: "",
      idProducto: "",
      idMateria: "",
      cantidad: "",
      comentarios: "",
    },
  ],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATERIA_PRIMA:
      if (action.payload.length !== 0)
        return {
          ...state,
          isLoading: false,
          materia: action.payload,
        };
      else return { ...state, isLoading: false };
    case ADD_MATERIA:
      return {
        ...state,
        materia: [...state.materia, action.payload.receta[0]],
      };
    default:
      return state;
  }
}
