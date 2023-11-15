import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { idProduct } = useParams();

    useEffect(() => {
        const fetchData = () => {
            return fetch("/data/products.json")
                .then((response) => response.json())
                .then((data) => {
                    const foundProduct = data.find((item) => item.id == idProduct);
                    setProduct(foundProduct);
                })
                .catch((error) => console.log(error));
        };

        fetchData();
    }, [idProduct]);

    return (
        <div>
            {product ? <ItemDetail product={product} /> : <p>CARGANDO..</p>}
        </div>
    );
};

export default ItemDetailContainer;
