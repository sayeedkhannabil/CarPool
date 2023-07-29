import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import logo from '../assets/carpool-logo.png';

export default function NavMod() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="200"
            height="80"
            className="d-inline-block align-top"
            alt="Carpool Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#carpool">Carpool</Nav.Link>
            <Nav.Link href="#bus">Bus</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#search">Search</Nav.Link>
            <Nav.Link href="#publish">Publish a Ride</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


