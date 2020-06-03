import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./types";
import axios from "axios";
import { returnErrors } from "./errorAction";
import md5 from "md5";

//cheking token & load user
export const loadUser = () => (dispatch, getState) => {
  axios
    .get("https://recetapp-mattseidel.herokuapp.com/api/auth", tokenConfig(getState))
    .then((res) => {
      console.log(res.data.user);
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (user) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  var { nombreUsuario, contraseña } = user;
  contraseña = md5(contraseña);
  axios
    .post("https://recetapp-mattseidel.herokuapp.com/api/auth", { nombreUsuario, contraseña })
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

//setup confi/headers and token
export const tokenConfig = (getState) => {
  //get Token from localestorage
  const token = getState().auth.token;
  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  //if token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
