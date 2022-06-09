//@ts-check

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Componets/NavBar.css';


function NavBar() {
return (
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
    <a className= "navbar-brand" href="#"> <img src='./Assets/img/LogoPrueba.png' /></a>
    <button className= "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className ="navbar-nav mr-auto">
        <li className ="nav-item active">
        <a className ="nav-link" href="#">Inicio</a>
        </li>
        <li className= "nav-item">
        <a className ="nav-link" href="#">Todos los productos</a>
        </li>
        <li className ="nav-item dropdown">
        <a className ="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categorias
        </a>
        <div className ="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className ="dropdown-item" href="#">Bodys</a>
            <a className ="dropdown-item" href="#">Remeras</a>
            <a className ="dropdown-item" href="#">Pantalones</a>
        </div>
        </li>
    </ul>
    <form className ="form-inline my-2 my-lg-0">
    <button type="button" className="btn btn-outline-primary"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg>Añadir al carrito</button>
    </form>
    </div>
    </nav>
);
}

export default NavBar;