import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Nav>
          <Nav.Link style={{ color: "white" }} href="#home">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#link">
            Link
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="#about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
