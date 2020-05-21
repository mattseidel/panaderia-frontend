import {
  ADD_RECIPES,
  DELETE_RECIPES,
  GET_RECIPES,
  RECIPES_LOADING,
  GET_ERRORS,
} from "./types";
import Axios from "axios";
import { returnErrors } from "../action/errorAction";

export const getRecipes = () => (dispatch) => {
  dispatch(setRecipesLoading());
  Axios.get("https://ec2-3-19-185-142.us-east-2.compute.amazonaws.com:5000/api/recetas/")
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

export const deleteRecipes = (id) => (dispatch) => {
  Axios.delete(`api/recetas/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_RECIPES,
        payload: id,
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

  Axios.post("api/recetas", receta, config)
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
