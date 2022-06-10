//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget/CartWidget';



function NavBar() {
    return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src='./Assets/img/LogoPrueba.png'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Todos los Productos</Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Pantalones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bodys</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Remeras</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Buzos</NavDropdown.Item>
        </NavDropdown>
        < CartWidget />
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default NavBar;