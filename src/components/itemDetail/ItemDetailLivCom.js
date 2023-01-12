import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ItemDetailLivCom = ({ id, nombre, categoria, descripcion, img, precio }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        console.log({
            id, nombre, categoria, descripcion, img, precio 
        })
    }

    const handleVolver = () => navigate("/")

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <br />
            <small>Categoría: {categoria}</small>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <hr />
            <div>
                <input type="number" value={cantidad} onChange={e => setCantidad(e.target.value)}/>
                <button className="btn btn-primary" onClick={handleAgregar}>Agregar al carrito</button>
            </div>
            <button className="btn btn-secondary" onClick={handleVolver}>Volver</button>
        </div >
    )
}

export default ItemDetailLivCom