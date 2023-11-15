import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }

    return (
        <>
        <div className='contenedor'>
            
            <Link to = {`item/${product.id}`}>
                <h2>{product.nombre}</h2>
            </Link>

            <img src={product.img} alt="" />
            
        </div>  

        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </>
        
    );
};

export default Item;