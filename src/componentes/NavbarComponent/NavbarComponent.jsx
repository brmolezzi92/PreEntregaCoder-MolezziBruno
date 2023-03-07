import React from 'react';
import {CartComponent} from '../CartComponent/CartComponent';
import "./navbar.css";
export const NavbarComponent
= () => {
  return (
    <nav>
        <span>PETSHOP MI MASCOTA</span>
        <ul>
            <li><a href="#">Perros</a></li>
            <li><a href="#">Gatos</a></li>
            <li><a href="#">Accesorios</a></li>
        </ul>
        <CartComponent />
    </nav>
  )
}

