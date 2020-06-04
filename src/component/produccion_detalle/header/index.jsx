import React from 'react';

function ProduccionDetalleHeader({head}) {
    return(
        <>
            <h1>{head.nombre} </h1>
            <h5>Cantidad que se solicitó: {head.cantidad_pedida} </h5>
            <h5>Masa promedio: {head.masa}</h5>
        </>
    )
}

export default ProduccionDetalleHeader;