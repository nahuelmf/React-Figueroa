
import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';
import  './ItemCart.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../../ItemCount/ItemCount';


export default function ItemCart({ product }) {

const { removeProduct } = useCartContext();
const {addItem} = useCartContext();


function onAdd(quantity) {
    addItem(product, quantity);
}

  return (
<Card style={{ width: '18rem', textAlign:"center", backgroundColor: "#e2d7d3" }}>
<div >
  <Card.Img variant="top" src={product.pictureUrl} alt={product.title} />
  <Card.Body>
    <Card.Title>
    Producto : {product.title}
    <p style={{marginTop:"1.5rem"}}>Cantidad : {product.quantity}</p>
    <p style={{marginTop:"1.5rem"}}>Precio : ${product.price}</p>
    <p style={{marginTop:"1.5rem"}}>Subtotal :${product.quantity * product.price}</p>
    </Card.Title>
    <div>
    <ItemCount stock={product.stock} onAdd={onAdd} initial={1}/>
    </div>
    <Button size='sm' variant="danger" onClick={() => removeProduct(product.id)}>X</Button>
  </Card.Body>
  </div>
</Card>
  )
}

