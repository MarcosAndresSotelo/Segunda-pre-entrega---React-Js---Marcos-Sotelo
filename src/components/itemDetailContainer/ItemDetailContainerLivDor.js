import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorIdLivCom } from "../../helper/pedirDatosLivCom"
import ItemDetailLivCom from "../itemDetail/ItemDetailLivCom"

const ItemDetailContainerLivCom = () => {

    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        pedirItemPorIdLivCom(itemId)
            .then((data) => {
                setItem(data)
            })
            .catch((err) =>
                setError(err.error)
            )
    }, [itemId])

    return (
        <div className="container my-5">
            {
                error ? error : item && <ItemDetailLivCom {...item} />
            }
        </div>
    )
}

export default ItemDetailContainerLivCom