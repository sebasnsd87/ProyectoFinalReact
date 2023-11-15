import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {

    const [quantity,setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
    }
    
    return (
        <div>
            <img src={product.img} alt={product.nombre} />
            <h2>{product.nombre}</h2>
            <p>Stock: {product.stock}</p>
            <p>Precio: {product.precio}</p>
            <p>Categoria: {product.categoria}</p>
            <p>Descripción: {product.descripcion}</p>
            {quantity 
            == 0 ? 
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            :
            <Link to={"/Cart"}>Ir al carrito</Link>
            }
        </div>
    );
};

export default ItemDetail;