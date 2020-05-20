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
    .get("/api/auth", tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (user) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  var { username, password } = user;
  password = md5(password);
  axios
    .post("/api/auth", { username, password })
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
  console.log("getting token");

  console.log(token);

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
