import React,{createContext, useState} from "react"
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

//PASO 1: CREAR LA INSTANCIA DEL CONTEXTO
export const CartContext = createContext()

//PASO 2: CREAR EL PROVIDER
export const CartProvider = ({children}) => {

    //PASO 8: CREAR EL CARRITO, CANTIDAD Y TOTAL
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadTotal,setCantidadTotal] = useState(0)

    //PASO 9: FUNCIONALIDADES DEL CARRITO

   
 //FUNCIÓN ENCARGADA DE AGREGAR AL CARRITO
 const addToCart = (producto, cantidad) => {
  const productoExistente = cart.find(prod => prod.producto.id === producto.id);

  const carritoActualizado = cart.map(prod => {
      return prod.producto.id === producto.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod;
  });

  setCart(productoExistente ? carritoActualizado : [...cart, { producto, cantidad }]);
  setCantidadTotal(prev => prev + cantidad);
  setTotal(prev => prev + producto.precio * cantidad);
};
    
    

// FUNCIÓN ENCARGADA DE REMOVER PRODUCTOS DEL CARRITO
const removeItem = (id) => {
  const productoEliminado = cart.reduce((prev, curr) => {
    if (curr.producto.id === id) {
      return curr;
    }
    return prev;
  }, null);

  const carritoActualizado = cart.filter(prod => prod.producto.id !== id);

  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará el producto del carrito',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
   

      setCart(carritoActualizado);
      setCantidadTotal(prev => prev - productoEliminado.cantidad);
      setTotal(prev => prev - productoEliminado.producto.precio * productoEliminado.cantidad);

      Swal.fire(
        'Producto eliminado',
        'El producto ha sido eliminado del carrito',
        'success'
      );
    } else {
    
      toast.info('La eliminación del producto ha sido cancelada');
    }
  });
};



// FUNCIÓN ENCARGADA DE LIMPIAR EL CARRITO
const clearCart = () => {
  if (cart.length === 0) {
    swal('Carrito vacío', 'No hay productos en el carrito', 'info');
  } else {
    swal({
      title: 'Limpiar carrito',
      text: '¿Estás seguro de limpiar el carrito?',
      icon: 'warning',
      buttons: ['Cancelar', 'Limpiar'],
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);

        swal('Carrito limpiado', '', 'success');
      }
    });
  }
};


    return (
        <CartContext.Provider
          value={{
            cart,
            total,
            cantidadTotal,
            addToCart,
            removeItem,
            clearCart,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };