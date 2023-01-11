import { useEffect, useState } from 'react';
import productoPromesaLivCom from '../../helper/productoPromesaLivCom';
import ItemListLivCom from '../itemList/ItemListLivCom';
import { useParams } from 'react-router-dom';

// ---------------------------------

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [Cargando, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoria } = useParams();

    // ---------------------------------

    useEffect(() => {
        setIsLoading(true);
        productoPromesaLivCom
            .then(prod => {
                if (categoria) {
                    setProductos(prod.filter(prod => prod.categoria === categoria));
                } else {
                    setProductos(prod)
                }
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, [categoria]);

    // ---------------------------------
    if (Cargando) {
        return <p>Cargando...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }
    return (
        <div>
            <ItemListLivCom productos={productos} />
        </div>
    );

}

export default ItemListContainer;