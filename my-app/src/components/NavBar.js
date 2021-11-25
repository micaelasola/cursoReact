import React from "react";
import { Link } from 'react-router-dom';
import { CartIcon } from '../components/CartIcon/CartIcon';
import { FaTicketAlt } from 'react-icons/fa'
import './NavBar/NavBar.css';

const NavBar = () => {

    
  return (
  
  <header className="header">
      <Link to="/"> <FaTicketAlt className="ticket"/></Link>

      <nav>
          <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/cart">Carrito</Link></li>
          </ul>
      </nav>
      
      <Link to="cart"> <CartIcon/> </Link>
      
  </header>
  )
}

export default NavBar;
