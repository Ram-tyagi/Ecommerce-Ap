import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";



const Header = (props) => {
    const clickStoreHandler = (event) => {
      event.preventDefault();
      props.onClickStore();
    };
  
    const cartClickHandler = (event) => {
      event.preventDefault();
      props.onClickCart();
    };
  
    return (
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/" >
            The Genrics
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="jds.com" onClick={clickStoreHandler}>
              Store
            </Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
          <Button variant="outline-warning" onClick={cartClickHandler}>Cart {3}</Button>{" "}
        </Container>
      </Navbar>
    );
};

export default Header;