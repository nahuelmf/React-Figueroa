import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';
import  './ItemCart.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ItemCart({ product }) {

const { removeProduct } = useCartContext();

  return (
<Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={product.pictureUrl} alt={product.title} />
  <Card.Body>
    <Card.Title>
      Producto : {product.title}
    </Card.Title>
    <Card.Text>
    <h2 className='tipografia'>Cantidad : {product.quantity}</h2>
    </Card.Text>
    <Card.Text>
    <h2 className='tipografia'>Precio : ${product.price}</h2>
    </Card.Text>
    <Card.Text>
    <h2 className='tipografia'>Subtotal :${product.quantity * product.price}</h2>
    </Card.Text>
    <Button variant="primary" onClick={() => removeProduct(product.id)}>Eliminar</Button>
  </Card.Body>
</Card>
  )
}

