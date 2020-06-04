import { GET_RECIPE_DETAIL, DATABASE } from "./types";
import { returnErrors } from "./errorAction";
import axios from "axios";

export const getRecipeDetail = (id) => (dispatch, getState) => {
  axios
    .get(`${DATABASE}/api/producto/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_RECIPE_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
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
