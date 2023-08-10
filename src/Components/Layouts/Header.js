import React,{useContext} from "react";
import CartContext from "../Store/cart-context";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";



const Header = (props) => {
    const cartCtx = useContext(CartContext);

    let cartCount = 0
  
    cartCtx.items.forEach(element => {
        cartCount += Number(element.quantity);
    })
   
  
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
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/store">Store</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contactus">Contact us</Nav.Link>
          </Nav>
          <Button variant="outline-warning" onClick={cartClickHandler}>
          Cart {cartCount}
        </Button>{" "}
        </Container>
      </Navbar>
    );
};

export default Header;