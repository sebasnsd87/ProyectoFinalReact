import React, { useContext } from 'react';
import { BiSolidCartAdd } from 'react-icons/bi';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const { cantidadTotal } = useContext(CartContext);
    console.log('Cantidad total en el carrito:', cantidadTotal);

    return (
        <div className="carrito">
            <Link to = "/Cart">
            <BiSolidCartAdd />
            </Link>
            <p>{cantidadTotal}</p>
        </div>
    );
};

export default CardWidget;
