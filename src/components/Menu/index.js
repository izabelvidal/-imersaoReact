import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="izaflix logo"/>
            </a>

            <a className="ButtonLink" href="/">
                Novo Vídeo
            </a>
        </nav>
    );
}

export default Menu; //para aparece nos outros lugares