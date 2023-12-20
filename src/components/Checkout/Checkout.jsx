import React, { useState, useContext } from "react";
import {collection, addDoc, updateDoc, doc, getDoc, getFirestore} from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./checkout.css"

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [confirmacionEmail, setConfirmacionEmail] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  


  const { cart, total, clearCart } = useContext(CartContext);

  const manejarFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !confirmacionEmail) {
      setError("Completar todos los campos");
      return;
    }

    if (email !== confirmacionEmail) {
      setError("Los campos de EMAIL no coinciden");
      return;
    }

    if (cart.length === 0) {
      setError("El carrito está vacío");
      return;
    }

    const db = getFirestore();

    const orden = {
      items: cart.map((producto) => ({
        id: producto.producto.id,
        nombre: producto.producto.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      email,
    };

    Promise.all (
        orden.items.map(async (productoOrden) =>{
            const productoRef= doc (db, "productos", productoOrden.id)
            const productoDoc= await getDoc (productoRef)
            const stockActual= productoDoc.data().stock

            console.log(stockActual)

            await updateDoc (productoRef, {
                stock: stockActual - productoOrden.cantidad,
            });
        })
    )

    .then (()=>{
        addDoc (collection(db,"ordenes"), orden)
        .then ((docRef)=>{
            setOrdenId(docRef.id);
            clearCart();
        })
        .catch((error)=>{
            console.log("ERROR AL CREAR LA ORDEN", error);
            setError("Se produjo un error al crear la orden");
        });
    })
    .catch((error)=>{
        console.log("No se pudo actualizar el stock", error)
        setError("No se puede actualizar el stock, intente de nuevo")
    });

    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setConfirmacionEmail("");

  };



  return (
    <div>
      <h2 className="tituloChek">INGRESA TUS DATOS</h2>
      <form onSubmit={manejarFormulario} className="formulario">
        {cart.map((producto) => (
          <div key={producto.producto.id}>
            <p>
              {""}
              {producto.producto.nombre} x {producto.cantidad} {""}
            </p>
            <p>{producto.producto.precio}</p>
            <hr />
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="">NOMBRE</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="">APELLIDO</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="">TELEFONO</label>
          <input type="number" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="">EMAIL</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="">CONFIRMACION DE EMAIL</label>
          <input type="email" onChange={(e) => setConfirmacionEmail(e.target.value)} />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">COMPRAR</button>
        <Link to="/" className="button-style">Ir al Inicio</Link>
        {ordenId && (
          <strong className="orderId">
            GRACIAS por tu compra!! Numero de orden: {ordenId} {""}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
