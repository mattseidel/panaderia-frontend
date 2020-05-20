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
    { nombre: "", id: "", numero_documento: "", email: "", tipo_usuario: "" },
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
        user: action.payload.user[0],
      };
    case LOGIN_SUCCESS:
      window.location.replace("/");
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
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
            id: "",
            numero_documento: "",
            email: "",
            tipo_usuario: "",
          },
        ],
        isAuthenticated: false,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      window.location.replace("/");
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
      return{
        ...state,
        msg: ''
      };
    default:
      return state;
  }
}
