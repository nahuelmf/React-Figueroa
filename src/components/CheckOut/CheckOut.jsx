import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

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
      .then(({id}) => console.log(id))
      

      console.log(nombre, apellido, tel, direccion, email, provincia, ciudad, cp);
      
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
      onClick={handleClick}
        required
        label="Acepto terminos y condiciones"
        feedback="Debe estar de acuerdo antes de enviar."
        feedbackType="invalid"
      />
    </Form.Group>
    <Button variant='primary' type="submit">Terminar Compra</Button>
  </Form>
  
  )
}


/*
npm install -g firebase-tools
antes de cada deploy crear el build local: "npm run build".
firebase login (si no estoy logueado en la cli)
firebase init (solo la primera vez luego no hacerlo!)
ready to proceed: yes, seleccionar: configure files for firebase for firebase…, use an existing project, seleccionar el proyecto existente de la lista, seleccionar carpeta build (no public), configurar como spa yes, setup automatic deploy with GitHub : no!,  reescribir index no!.
firebase deploy (siempre primero crear el build y luego “firebase deploy”).

*/