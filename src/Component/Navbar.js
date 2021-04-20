import React from "react"
import { Navbar, Nav } from 'react-bootstrap';


function NavbarC() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Reducer</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>

  );
}

export default NavbarC;
