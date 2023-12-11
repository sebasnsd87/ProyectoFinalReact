import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ product }) => {
  return (
    <>
      <div className="contenedor">
        <Link to={`/item/${product.id}`}>
          <h2>{product.nombre}</h2>
        </Link>
        <img className="imagen" src={product.img} alt="" />
        <Link to={`/item/${product.id}`} className="comprar-boton">COMPRAR</Link>
      </div>
    </>
  );
};

export default Item;
