import { GET_ERRORS, CLEAR_ERRORS } from "./types";

//return errors
/**
 * Función para obtener todos los errores del servidor
 * @async true
 * @var msg = mensaje de error
 * @var status = estado que retorna el servidor
 * @var id? = el id que retonra, esto es opcional
 */
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};
/**
 * Función para eliminar los errores
 */
export const clearErrors = () =>{
    return{
        type: CLEAR_ERRORS
    }
}