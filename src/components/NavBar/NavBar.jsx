//@ts-check
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Logo from "../../Assets/img/Pichuninuni.jpeg";

function NavBar() {
    return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand><NavLink to="/"><img src={Logo} alt='imagen'/></NavLink></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><NavLink to="/">Inicio</NavLink></Nav.Link>
        <Nav.Link><NavLink to="/">Todos los Productos</NavLink></Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item className='sec'><NavLink to='/category/Pantalones'>Pantalones</NavLink></NavDropdown.Item>
          <NavDropdown.Item className='sec'><NavLink to='/category/Bodys'>Bodys</NavLink></NavDropdown.Item>
          <NavDropdown.Item className='sec'><NavLink to='/category/Remeras'>Remeras</NavLink></NavDropdown.Item>
          <NavDropdown.Item className='sec'><NavLink to='/category/Buzos'>Buzos</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavLink to="cart">
        < CartWidget />
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default NavBar;