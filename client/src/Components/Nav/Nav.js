import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavComponent() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Library-App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">New Book</Nav.Link>
          <Nav.Link href="/catalogue">Catalogue</Nav.Link>
          <Nav.Link className="disabled" href="">
            Search
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/catalogue">
    //     My Books
    //   </a>
    //   <br />
    //   <a className="navbar-brand" href="/home">
    //     New Book
    //   </a>
    // </nav>
  );
}

export default NavComponent;
