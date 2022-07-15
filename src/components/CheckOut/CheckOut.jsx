import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CheckOut() {
    const {cart, totalPrice} =useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tel, setTel] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [provincia, setProvincia] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [cp, setCp] = useState('');

    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


    const order ={
        buyer:{
          nombre: nombre,
          apellido: apellido,
          tel: tel,
          direccion: direccion,
          email: email,
          provincia: provincia,
          ciudad: ciudad,
          cp: cp,
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
      }
      
      const handleClick = () => {
      const db = getFirestore();
      const orderCollection = collection(db, 'orders');
      addDoc(orderCollection, order)
      .then(({id}) => Swal.fire('Su numero de orden es' , id) )


      }


  return (
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
        onChange={(e) => setNombre(e.target.value)}
          required
          type="text"
          placeholder="Nombre"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
        onChange={(e) => setApellido(e.target.value)}
          required
          type="text"
          placeholder="Apellido"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>Telefono</Form.Label>
        <Form.Control onChange={(e) => setTel(e.target.value)} type="tel" placeholder="Telefono" required />
        <Form.Control.Feedback type="invalid">
          Por favor ingrese un telefono valido.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" required />
        <Form.Control.Feedback type="invalid">
          Por favor ingrese un email valida.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>Direccion</Form.Label>
        <Form.Control onChange={(e) => setDireccion(e.target.value)} type="text" placeholder="Direccion" required />
        <Form.Control.Feedback type="invalid">
          Por favor ingrese una direccion valida.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control onChange={(e) => setCiudad(e.target.value)} type="text" placeholder="Ciudad" required />
        <Form.Control.Feedback type="invalid">
          Por favor ingrese una ciudad valida.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label>Provincia</Form.Label>
        <Form.Control onChange={(e) => setProvincia(e.target.value)} type="text" placeholder="Provincia" required />
        <Form.Control.Feedback type="invalid">
          Por favor ingrese una provincia valida.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="2" controlId="validationCustom05">
        <Form.Label>Codigo Postal</Form.Label>
        <Form.Control onChange={(e) => setCp(e.target.value)} type="text" placeholder="Codigo Postal" required />
        <Form.Control.Feedback type="invalid">
          Por favor ingrese un codigo postal valido.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Form.Group className="mb-3">
      <Form.Check
        required
        label="Acepto terminos y condiciones"
        feedback="Debe estar de acuerdo antes de enviar."
        feedbackType="invalid"
      />
    </Form.Group>
    <Link to='/'> <Button variant='primary' onClick={handleClick} type="submit" >Terminar Compra</Button>
    </Link>

  </Form>

  )
}

/**deploy
*que se vea bien en celulares
*que use localstorage
*validar el formulario de compra
*borrar todo el debug con console.log
*stock
*/