import { GET_PLACE, GET_CATEGORY } from "../action/types";

const initialState = {
  categories: [{ idCategroia: "", nombre: "" }],
  place: [{ idLugar: "", nombre: "" }],
  isLoading: true,
  msg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLACE:
      return {
        ...state,
        isLoading: false,
        place: action.payload.data,
      };
      case GET_CATEGORY:
        return {
          ...state,
          isLoading: false,
          categories: action.payload.data
        }
    default:
      return state;
  }
}
