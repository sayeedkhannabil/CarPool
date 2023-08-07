import React from 'react';
import { Container, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { FaUserAlt   } from "react-icons/fa";

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
            {/*<Nav.Link href="#Login">Login</Nav.Link>*/}
            <NavDropdown title={<FaUserAlt />} id="basic-nav--dropdown">
              <NavDropdown.Item href="#Login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#SignUp">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


