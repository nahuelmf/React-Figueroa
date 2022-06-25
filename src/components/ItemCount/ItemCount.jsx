//@ts-check
import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'
import './ItemCount.css'

export default function ItemCount({ stock, initial,  onAdd }) {
const [click, setCount] = useState(initial);

const decrease =() => {
  setCount(click - 1);
}

const increase =() =>{
setCount (click + 1);
}

return (
    <div className='box'>
      <ButtonGroup>
    <Button variant="outline-primary" disabled={click <=1} onClick={decrease }>-
    </Button>
    <Button variant="outline-primary" disabled={click >= stock}  onClick= {increase}>+
    </Button>
    </ButtonGroup>
    <br />
    <Button className='boton' variant="primary" disabled={stock <=0} onClick={() => onAdd (click)}>
  Añadir al carrito <Badge bg="dark">{click}</Badge>
</Button>
    </div>

);
}


