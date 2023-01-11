import { setItem } from "localforage";
import { useEffect, useState } from "react";
import { pedirItemPorId } from "../../helper/productoPromesaLivCom"
import ItemDetailLivCom from "../ItemDetailLivCom"

const ItemDetailContainerLivCom = ({ id }) => {
    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null)

        pedirItemPorId(id)
            .then((data) => {
                setItem(data)
            })
            .catch((err) => {
                setError(err.error)
            })
    }, [id])

    return (
        <div className="container my-5">
            {
                error ? error : item && <ItemDetailLivCom {...item} />
            }
        </div>
    )
}

export default ItemDetailContainerLivCom