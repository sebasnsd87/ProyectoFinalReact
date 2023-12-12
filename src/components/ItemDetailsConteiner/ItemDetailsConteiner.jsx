import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { idProduct } = useParams();

    useEffect(() => {

        const db = getFirestore()

        const nuevoDoc= doc(db, "productos", idProduct)

        getDoc(nuevoDoc)

        .then(res =>{
            const data=res.data();
            const nuevosProductos= {id: res.id,...data}
            setProduct(nuevosProductos)
        })

        .catch (error => console.log(error))
     
    }, [idProduct]);

    return (
        <div>
            {product ? <ItemDetail product={product} /> : <p>CARGANDO...</p>}
        </div>
    );
};

export default ItemDetailContainer;

