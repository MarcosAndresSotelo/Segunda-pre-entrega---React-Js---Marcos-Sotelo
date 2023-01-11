import { ItemLivCom } from "../item/ItemLivCom"


export const ItemListLivCom = ({ productos }) => {

    return (

        <div className='container my-5'>
            <h1>Living - Comedor</h1>
            <br />
            <h2>Productos</h2>
            <hr />
            <div className='container my-5'>
                {
                    productos.map((prod) => <ItemLivCom key={prod.id} prod={prod} />)
                }
            </div>
        </div>


    )

}

export default ItemListLivCom