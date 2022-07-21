import React, {useContext} from 'react'
import { CartContext, useCartContext } from '../CartContext/CartContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Swal from 'sweetalert2';
import './CheckOut.css';

export default function CheckOut() {
  const {clearCart} = useCartContext();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else{
      event.preventDefault();
      event.stopPropagation();
      handleClick();
    }
    setValidated(true)  ;
  };
  

      const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then(({id}) => Swal.fire('Su numero de orden es' , id) 
        .then((res) => {
          navigate ("/", {replace: true})
        })
        )
        .finally(clearCart);
        }


  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

    let navigate = useNavigate();
    const {cart, totalPrice} =useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [tel, setTel] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [provincia, setProvincia] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [cp, setCp] = useState('');

    const date = new Date();
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];


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
        date: date.toLocaleDateString(), 
        hora: [hour, minutes, seconds],
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
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
      <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              validate={validateEmail}
              required
            />
            <Form.Control.Feedback type="invalid">
            Por favor ingrese un email valido.
            </Form.Control.Feedback>
          </InputGroup>
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
      <Form.Group as={Col} md="3" controlId="validationCustom05">
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
  <Button variant='primary' type="submit" >Terminar Compra</Button>
</Form>
  )
}
