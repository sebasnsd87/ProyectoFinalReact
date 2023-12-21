import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="piedepagina">
                <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="/img/facebook.png" alt="Icono Facebook" /></a>
                <a href="https://services.tochat.be/es/api/business/send/0eb27634-f70f-4b4a-bde5-ad7ed90abb95" target="_blank" rel="noopener noreferrer"><img src="/img/whatsapp.png" alt="Icono Whatsapp" /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="/img/instagram.png" alt="Icono Instagram" /></a>
            </section>
            <section className="titulo">
                <h2>ACEPTAMOS TODAS LAS TARJETAS Y METODOS DE PAGO</h2>
            </section>
            <section className="tarjetas">
                <img src="/img/tarjetasnuevologo.png" alt="tarjetas" />
            </section>
            <section className="Copy">
                <h6>Copyright®2023 SERVIOWEB</h6>
            </section>
        </footer>
    );
};

export default Footer;
