import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart } from "react-icons/bs";

function NavBar({setShow,size}){

    return(
        <Container>
            <Row><h3>Product Listing Page(Sample)</h3></Row>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand className="my_shop" onClick={() => setShow(true)}>TeeRexStore</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Link href="#Carts" onClick={() => setShow(false)}>
                            <b>Products</b> <BsCart/><span>{size}</span>     
                    </Nav.Link>
                </Nav>
                <Row></Row>
                </Container>
            </Navbar>            
    </Container>
       
    )
};
export default NavBar;