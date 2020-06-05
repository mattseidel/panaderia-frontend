import {
  GET_PRODUCCION,
  DATABASE,
  ADD_PRODUCCION,
  LOADING_PRODUCTO,
  GET_PRODUCCION_PRODUCTO,
} from "./types";
import axios from "axios";
import { returnErrors } from "./errorAction";

export const getProduccion = () => (dispatch) => {
  axios
    .get(`${DATABASE}/api/produccion`)
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    })
    .then((res) => dispatch({ type: GET_PRODUCCION, payload: res.data }))
};

export const addProduccion = (producto) => (dispatch, getState) => {
  dispatch({ type: LOADING_PRODUCTO });
  axios
    .post(`${DATABASE}/api/produccion`, producto, tokenConfig(getState))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    })
    .then((res) => {
      dispatch({ type: ADD_PRODUCCION, payload: res.data });
    });
};
export const getProduccionProducto = (id) => (dispatch, getState) => {
  axios
    .get(`${DATABASE}/api/produccion/${id}`, tokenConfig(getState))
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
    .then((res) => dispatch({ type: GET_PRODUCCION_PRODUCTO, payload: res.data }))
};

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
