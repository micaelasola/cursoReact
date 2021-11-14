import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { CartWidget } from "../components/CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Compra tus entradas</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#iphone">
                  Inicio
                </NavDropdown.Item>
                <NavDropdown.Item href="#mac">
                  Contacto
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
