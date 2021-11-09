import { CartWidget } from "../components/CartWidget/CartWidget";
import { Container } from 'react-bootstrap'


const NavBar = () => {
  return (
    <Container>
      
        <ul className="home">
          <li>AlAire</li>
          <li>Bandas</li>
          <li>Contacto</li>
          <li></li>
        </ul>
        <CartWidget />
    
    </Container> 
     );
};

export default NavBar;
