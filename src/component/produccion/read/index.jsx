import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import {Link} from 'react-router-dom'
import "./style.css";

function ProduccionRead({ produccion }) {
  return (
    <div className="row p-3">
      {produccion.map((p) => (
        <div className="col-12 col-lg-4">
          <Card>
            <CardHeader className="cabecera">{p.nombre}</CardHeader>
            <CardBody className="contendor">
              <p>Cantidad pedida: {p.cantidad_pedida}</p>
              <p>Masa: {p.masa} </p>
            </CardBody>
            <CardFooter  className="cabecera">
              <Link className="btn button-detail" to={`/produccion/${p.idProducto}`}>Detalle</Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProduccionRead;
