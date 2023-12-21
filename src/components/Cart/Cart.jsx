import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./cart.css";
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

.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cart-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.item-image {
  max-height: 200px;
  width: auto;
}

.item-details {
  margin-top: 10px;
}

button {
  margin-top: 10px;
}
