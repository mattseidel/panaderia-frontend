import {
  GET_PRODUCCION,
  ADD_PRODUCCION,
  LOADING_PRODUCTO,
  GET_PRODUCCION_PRODUCTO
} from "../action/types";

const initialState = {
  data: [
    {
      idproduccion_pedida: "",
      fecha_produccion: "",
      nombre: "",
      cantidad_pedida: "",
      masa: "",
    },
  ],
  materia: [
    {
      idProducto: "",
      nombre: "",
      masa: "",
      fecha_produccion: "",
    },
  ],
  produccion: [
    {
      idproduccion_pedida: "",
      fecha_produccion: "",
      nombre: "",
      cantidad_pedida: "",
      masa: "",
      idProducto: "",
    },
  ],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCCION:
      if (action.payload.length !== 0)
      return {
        ...state,
        isLoading: false,
        produccion: action.payload,
      };
      else return {...state, isLoading: false}
    case ADD_PRODUCCION:
      window.location.replace('/')
      return{
        ...state,
        isLoading: false,
        produccion: [...action.payload]
      }
      case GET_PRODUCCION_PRODUCTO:
        return{
          ...state,
          isLoading: false,
          data: action.payload.data, 
          materia: action.payload.materia,
        }
    case LOADING_PRODUCTO:
      return {
        isLoading: true,
      };
    default:
      return state;
  }
}
