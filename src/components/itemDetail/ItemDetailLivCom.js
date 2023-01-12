

const ItemDetailLivCom = ({ id, nombre, categoria, descripcion, img, precio }) => {
   
   

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <br />
            <small>Categoría: {categoria}</small>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
         
        </div >
    )
}

export default ItemDetailLivCom