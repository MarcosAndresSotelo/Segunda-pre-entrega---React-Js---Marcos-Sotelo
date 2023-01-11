import { useEffect, useState } from 'react';
import productoPromesaDorBanio from '../../helper/productoPromesaDorBanio';
import ItemListDorBanio from '../itemList/ItemListDorBanio';
import { useParams } from 'react-router-dom';

// ---------------------------------

export const ItemListContainerDorBanio = () => {
    const [productos, setProductos] = useState([]);
    const [Cargando, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoria } = useParams();

    // ---------------------------------

    useEffect(() => {
        setIsLoading(true);
        productoPromesaDorBanio
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
            <ItemListDorBanio productos={productos} />
        </div>
    );

}

export default ItemListContainerDorBanio;