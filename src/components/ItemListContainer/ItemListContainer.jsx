import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {

        const db = getFirestore()

        const misProductos = categoryId
        ? query(collection(db, "productos"), where ("categoria", "==", categoryId))
        : collection (db, "productos")

        getDocs (misProductos)

        .then ((res)=>{
            const nuevosProductos = res.docs.map ((doc) => {
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProducts(nuevosProductos)
        })
            .catch ((error)=> console.log(error))

    }, [categoryId]);

    return (
        <>
            {!products.length ? <h2>CARGANDO...</h2> : <ItemList products={products} />}
        </>
    );
};

export default ItemListContainer;
