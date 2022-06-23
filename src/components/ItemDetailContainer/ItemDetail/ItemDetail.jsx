import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


export default function ItemDetail( {data}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return (
<Card className='info'  style={{ width: '28rem', float:'left', margin:'1rem 5rem', height:'50rem'}}>
<Card.Img variant="top" src={data.pictureUrl} />
<Card.Body >
    <h1 >{data.title}
    </h1>
    <Button variant="secondary" onClick={handleShow}>Ver detalle del producto
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Body>{data.description}</Modal.Body>
        <Modal.Footer>
            <p>Stock: {data.stock}</p>
        <Button variant="secondary" onClick={handleClose}>
            Cerrar
        </Button>
        </Modal.Footer>
    </Modal>
    <Card.Text className='precio'>${data.price}
    </Card.Text>

</Card.Body>
</Card>
)
}
