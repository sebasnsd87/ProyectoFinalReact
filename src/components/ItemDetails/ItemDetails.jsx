import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import "./itemDetails.css";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    addToCart(product, cantidad);

    console.log(cantidad);
  };

  return (
    <div className="item-detail">
      <img className="item-image" src={product.img} alt={product.nombre} />
      <div className="item-info">
        <h2>{product.nombre}</h2>
        <p>Stock: {product.stock}</p>
        <p>Precio: {product.precio}</p>
        <p>Categoria: {product.categoria}</p>
        <p>Descripción: {product.descripcion}</p>
      </div>
      <div className="item-buttons">
        {quantity === 0 ? (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        ) : (
          <Link to="/Cart">Ir al carrito</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

