import { GET_RECIPE_DETAIL, ADD_MATERIA_PRIMA, DELETE_MATERIA_PRIMA } from "../action/types";

const initialState = {
  data: [
    {
      idProducto: "",
      nombre: "",
      categoria: "",
      ubicacion: "",
      ultima_modificacion: "",
    },
  ],
  cuerpo: [{ materia: "", cantidad: "", comentarios: "" }],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE_DETAIL:
      if (action.payload.length !== 0)
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        cuerpo: action.payload.cuerpo,
      };
      else return {...state, isLoading: false}
    case ADD_MATERIA_PRIMA:
      return {
        ...state,
        cuerpo: [...state.cuerpo, action.payload.materia[0]],
      };
    case DELETE_MATERIA_PRIMA:
      return {
        ...state,
        cuerpo: state.cuerpo.filter((d) => d.idMateria !== action.payload),
      };
    default:
      return state;
  }
}
