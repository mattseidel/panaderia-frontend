import React from "react";
import { Table, Button } from "reactstrap";
import "./style.css";
import DeleteRecetaDetalle from '../delete'
import { connect } from "react-redux";
import { deleteMateriaPrima } from "../../../stores/action/materiaPrima";

function RecetaDetalleCuerpo({ idProducto, cuerpo, deleteMateriaPrima }) {
  const onDelete = (e, materia) => {
    e.preventDefault();
    console.log(materia);
    deleteMateriaPrima(idProducto, materia);
  };
  if (typeof cuerpo != "undefined") {
    return (
      <Table>
        <thead>
          <tr>
            <th>Materia prima</th>
            <th>Cantidad</th>
            <th>Comentarios</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cuerpo.map((c) => (
            <tr>
              <td>{c.materia}</td>
              <td>{c.cantidad} </td>
              <td>{c.comentarios} </td>
              <td>
                <DeleteRecetaDetalle idProducto={idProducto} idMateria={c.idMateria} ></DeleteRecetaDetalle>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default connect(null, { deleteMateriaPrima })(RecetaDetalleCuerpo);
