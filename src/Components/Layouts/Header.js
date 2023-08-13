import React,{useContext} from "react";
import CartContext from "../Store/cart-context";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import AuthContext from "../storeContext/auth-context";



const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    let location=useLocation();

    let cartCount = 0
  
    cartCtx.items.forEach(element => {
        cartCount += Number(element.quantity);
    })
   
  
    const cartClickHandler = (event) => {
      event.preventDefault();
      props.onClickCart();
    };
    const logoutClickHandler = () => {
      authCtx.logout();
    }
    const isStoreVisible = location.pathname === "/store";
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
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          {isStoreVisible && (<Button variant="outline-warning" onClick={cartClickHandler} >
          Cart {cartCount}
        </Button>)}
        {authCtx.isLoggedIn && <Button variant="danger" onClick={logoutClickHandler}>Logout</Button>}
        </Container>
      </Navbar>
    );
};

export default Header;