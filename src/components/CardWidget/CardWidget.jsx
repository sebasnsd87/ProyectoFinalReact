import React, { useContext } from 'react';
import { BiSolidCartAdd } from 'react-icons/bi';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import "./cardwidget.css"


const CardWidget = () => {
    const { cantidadTotal } = useContext(CartContext);
  

    return (
        <div className="carrito">
            <Link to = "/Cart">
            < BiSolidCartAdd className='icono' />
            </Link>
            <p>{cantidadTotal}</p>
        </div>
    );
};

export default CardWidget;
