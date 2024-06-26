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
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Envíos</Nav.Link>
                        <Nav.Link href="#pricing">Sobre nosotros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


