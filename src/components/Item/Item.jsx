import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({product}) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }

    return (
        <>
        <div className='contenedor'>
            <img src={product.img} alt="" />
            <h1>{product.nombre}</h1>
            <p>{product.precio}</p>
            <h2>{product.stock}</h2>
            <p>{product.descripcion}</p>
        </div>  

        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
        
    );
};

export default Item;