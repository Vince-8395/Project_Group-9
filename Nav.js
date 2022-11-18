import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './Nav.css'

const Nav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.link href="#">Home</Nav.link>
                    <Nav.link href="#">About Us</Nav.link>
                    <Nav.link href="#">Settings</Nav.link>
                    <Nav.link href="#">Features</Nav.link>
                    <Nav.link href="#">Services</Nav.link>
                </Nav>    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs;