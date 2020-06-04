import React from "react";
import { Table } from "reactstrap";

function ProduccionDetalleBody({ body }) {
  const numberFormat = (number) => {
    return new Intl.NumberFormat("en-IN").format(number);
  };
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Materia Prima</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {body.map((b, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{b.nombre} </td>
            <td>{numberFormat(b.masa)} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProduccionDetalleBody;
