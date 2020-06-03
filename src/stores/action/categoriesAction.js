import { GET_PLACE, GET_CATEGORY } from "./types";
import axios from "axios";
import { returnErrors } from "./errorAction";

export const getPlace = () => (dispatch) => {
  
  axios
    .get("https://recetapp-mattseidel.herokuapp.com/api/ubicacion")
    .then((res) => {
     
      dispatch({ type: GET_PLACE, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const getCategory = () => (dispatch) => {
  
  axios
    .get("https://recetapp-mattseidel.herokuapp.com/api/tipoProducto")
    .then((res) => {
     
      dispatch({ type: GET_CATEGORY, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
