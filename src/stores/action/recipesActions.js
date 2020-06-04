import {
  ADD_RECIPES,
  DELETE_RECIPES,
  GET_RECIPES,
  RECIPES_LOADING,
  GET_ERRORS,
  DATABASE
} from "./types";
import Axios from "axios";
import { returnErrors } from "../action/errorAction";

export const getRecipes = () => (dispatch) => {
  dispatch(setRecipesLoading());
  Axios.get(`${DATABASE}/api/producto/`)
    .then((res) => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);

      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteRecipes = (idproducto) => (dispatch, getState) => {
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
  Axios.delete(`${DATABASE}/api/producto/${idproducto}`, config)
    .then((res) => {
      dispatch({
        type: DELETE_RECIPES,
        payload: idproducto,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const addRecipe = (receta) => (dispatch, getState) => {
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
  Axios.post(`${DATABASE}/api/producto`, receta, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADD_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const setRecipesLoading = () => {
  return {
    type: RECIPES_LOADING,
  };
};
