import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemCount from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';



export default function ItemDetail( {data}) {    
    const [goToCart, setGoToCart] = useState(false);
    const {addItem} = useCartContext();


    function onAdd(quantity) {
        setGoToCart(true);
        addItem(data, quantity);
    }
return (

<Card className='info'  style={{ width: '28rem', float:'left', margin:'1rem 5rem', height:'auto'}}>
<Card.Img variant="top" src={data.pictureUrl} />
<Card.Body >
    <h1 >{data.title}
    </h1>
        <Modal.Body>{data.description}</Modal.Body>
    <Card.Text className='precio'>${data.price}
    </Card.Text>
    {
        goToCart
        ? <Link to='/cart'> <Button variant="secondary"> Finalizar compra </Button></Link>
        : <ItemCount stock={data.stock} onAdd={onAdd} initial={1}/>
    }
                <p>Stock: {data.stock}</p>
</Card.Body>
</Card>

)
}
