import React from 'react';
import images from './images';

export default function Navbar(){
    return(
        <div>
            <div>
                <img src={images.LogoCompleto} alt='Texto logo'></img>
            </div>
            <nav className='nav'>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Sobre nosotros</a></li>
                    <li><a href="/">Carrito</a></li>
                </ul>
            </nav>
        </div>
    )
}
