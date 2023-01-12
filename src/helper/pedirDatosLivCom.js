import ProdLivCom from '../data/productos/ProdLivCom.json'

export const pedirItemPorIdLivCom = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = ProdLivCom.find((el) => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: 'Error'
                })
            }
        }, 500)
    })
}

export default pedirItemPorIdLivCom