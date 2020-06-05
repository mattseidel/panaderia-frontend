import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

function ProduccionRead({ produccion, user }) {

  if(produccion[0].nombre ==='') return(
    <h1>No hay información que mostrar aun</h1>
  )
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
            {user ? (
              <CardFooter className="cabecera">
                <Link
                  className="btn button-detail"
                  to={`/produccion/${p.idProducto}`}
                >
                  Detalle
                </Link>
              </CardFooter>
            ) : null}
          </Card>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(ProduccionRead);
