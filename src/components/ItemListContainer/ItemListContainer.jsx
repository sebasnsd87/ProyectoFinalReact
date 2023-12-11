import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/products.json");
                if (!response.ok) {
                    throw new Error('Sin respuesta de la red');
                }
                const data = await response.json();
                const filteredProducts = categoryId ? data.filter(p => p.categoria === categoryId) : data;
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <>
            {!products.length ? <h2>CARGANDO...</h2> : <ItemList products={products} />}
        </>
    );
};

export default ItemListContainer;
