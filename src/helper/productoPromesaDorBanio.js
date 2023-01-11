import ProdLivCom from '../data/productos/ProdDorBanio.json'


export const productoPromesaDorBanio = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(ProdLivCom);
    }, 1500);
});


export default productoPromesaDorBanio