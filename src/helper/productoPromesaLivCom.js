import ProdLivCom from '../data/productos/ProdLivCom.json'


export const productoPromesaLivCom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(ProdLivCom);
    }, 1500);
});


export default productoPromesaLivCom