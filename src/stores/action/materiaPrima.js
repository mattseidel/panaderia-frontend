import {
  GET_MATERIA_PRIMA,
  ADD_MATERIA_PRIMA,
  DELETE_MATERIA_PRIMA,
  ADD_MATERIA,
  DATABASE
} from "./types";
import axios from "axios";
import { returnErrors } from "./errorAction";


export const getMateriaPrima = () => (dispatch) => {
  
  axios
    .get(`${DATABASE}/api/materia`)
    .then((res) => {
      dispatch({ type: GET_MATERIA_PRIMA, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const addMateria = (producto) => (dispatch, getState) => {
  
  axios
    .post(`${DATABASE}/api/materia`, producto, tokenConfig(getState))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADD_MATERIA,
        payload: res.data,
      });
    })
};

export const addMateriaPrima = (producto) => (dispatch, getState) => {
  axios
    .post(`${DATABASE}/api/receta`, producto, tokenConfig(getState))
    .then((data) => {
      dispatch({
        type: ADD_MATERIA_PRIMA,
        payload: data.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteMateriaPrima = (idProducto, idMateria) => (
  dispatch,
  getState
) => {
  axios
    .delete(
      `${DATABASE}/api/receta/producto/${idProducto}/materia/${idMateria}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({ type: DELETE_MATERIA_PRIMA, payload: idMateria });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
