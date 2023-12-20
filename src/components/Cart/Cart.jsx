import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";



const Cart = () => {
  const { cart, total, clearCart, removeItem } = useContext(CartContext);
 
  
  return (
    <div className="cart-container">
      <h2>CARRITO</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.producto.id} className="cart-item">
            <img src={item.producto.img} alt={item.producto.nombre} className="item-image" />
            <div className="item-details">
              <h2>{item.producto.nombre}</h2>
              <p>Precio: ${item.producto.precio}</p>
              <p>Stock: {item.producto.stock}</p>
              <p>Descripción: {item.producto.descripcion}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p>Total: ${item.cantidad * item.producto.precio}</p>
            </div>
            <button onClick={() => removeItem(item.producto.id)}>ELIMINAR PRODUCTO</button>
          </div>
        ))}
      </div>

      <h2>VALOR TOTAL DEL CARRITO: ${total}</h2>
      <button onClick={clearCart}>VACIAR EL CARRITO</button>
      <Link to = {"/Checkout"}>Terminar la COMPRA</Link>
    </div>
  );
};

export default Cart;
