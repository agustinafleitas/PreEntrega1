import React from 'react';
import images from './images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function PuppiesNavBar(){
    return(
        <div>
            <Navbar bg="light" data-bs-theme="light">
            <div>
                <img src={images.LogoCompleto} alt='Texto logo' style={{ width: '150px'}}></img>
            </div>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


