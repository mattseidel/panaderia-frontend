import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../action/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: [
    {
      nombre: "",
      idtrabajdor: "",
      nombreUsuario: "",
      email: "",
      nivelAcceso: "",
    },
  ],
  msg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      window.location.replace('/')
      return {
        ...state,
        ...action.payload.user[0].data[0],
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        user: [
          {
            nombre: "",
            idtrabajdor: "",
            nombreUsuario: "",
            email: "",
            nivelAcceso: "",
          },
        ],
        isAuthenticated: false,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        user: [
          {
            nombre: "",
            id: "",
            numero_documento: "",
            email: "",
            tipo_usuario: "",
          },
        ],
        isAuthenticated: false,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        msg: "",
      };
    default:
      return state;
  }
}
