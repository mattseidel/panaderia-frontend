import React from 'react';
import { ListGroup, ListGroupItem,ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
function ReadMateriaPrima({materia}) {
    const convertDate = (date) => {
        return new Date(date).toLocaleDateString();
      };
    return(
        <ListGroup>
            {materia.map(m=>(
                 <ListGroupItem>
                     <ListGroupItemHeading> {m.nombre} </ListGroupItemHeading>
                     <ListGroupItemText>Última modificación {convertDate(m.ultima_modificacion)} </ListGroupItemText>
                 </ListGroupItem>
            ))}
        </ListGroup>
    )
    
}

export default ReadMateriaPrima;