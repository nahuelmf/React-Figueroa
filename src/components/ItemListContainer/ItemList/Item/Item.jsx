//@ts-check
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';
import ItemCount from '../../../ItemCount/ItemCount';



export default function Item({info})  {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function onAdd(count) {
        alert("Quiero agregar " + count + " de " + info.name);
    }
return (

<Link to={`/detalle/${info.id}`}>
<Card className='info'  style={{ width: '28rem', float:'left', margin:'1rem 5rem', height:'54rem'}}>
<Card.Img variant="top" src={info.pictureUrl} />
<Card.Body >
    <h1 >{info.title}
    </h1>
    <Button variant="primary" onClick={handleShow}>Ver detalle del producto
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Body>{info.description}</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cerrar
        </Button>
        </Modal.Footer>
    </Modal>
    <Card.Text className='precio'>${info.price}
    </Card.Text>
<ItemCount stock={info.stock} onAdd={onAdd} initial={1}/>
</Card.Body>
</Card>
</Link>
)
}
