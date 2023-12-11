import React, {useState} from 'react';
import "./itemCount.css"

const ItemCount = ({initial,stock,onAdd}) => {


    const [count,setCount] = useState(initial)


    const increment = () => {
        if(count<stock){
            setCount(count+1)
        }
    }

    const decrement = () => {
        if(count>initial){
            setCount(count-1)
        }
    }

    const handleAddToCart = () => {
        onAdd(count); // Asumiendo que esta función actualiza el contexto del carrito
        console.log('Cantidad enviada al carrito:', count);
    };

    return (
        <div className='boton'>
            <button onClick={increment}>Agregar</button>
            <span>{count}</span>
            <button onClick={decrement}>Eliminar</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;