import { ItemDorBanio } from "../item/ItemDorBanio"


export const ItemListDorBanio = ({ productos }) => {

    return (

        <div className='container my-5'>
            <h1>Dormitorio y Baño</h1>
            <br />
            <h2>Productos</h2>
            <hr />
            <div className='container my-5'>
                {
                    productos.map((prod) => <ItemDorBanio key={prod.id} prod={prod} />)
                }
            </div>
        </div>


    )

}

export default ItemListDorBanio