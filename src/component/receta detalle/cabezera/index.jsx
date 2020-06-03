import React from "react";
import './style.css'

function RecetaDetalleCabeza({ data }) {
  return (
    <div className="mt-2">
      <h1 className="display-3">{data.nombre}</h1>
      <p className="lead">
        Ubicación = <span>{data.ubicacion}</span>
      </p>
    </div>
  );
}

export default RecetaDetalleCabeza;
