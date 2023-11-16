import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./item.css"

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

            <img className='imagen' src={product.img} alt="" />
            
        </div>  

        <ItemCount className='boton' initial={1} stock={10} onAdd={onAdd}/>
        </>
        
    );
};

export default Item;