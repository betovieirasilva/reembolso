/**
 * Created by gilberto on 17/02/17.
 */

const fetchCategorias = () => {

    return fetch('http://localhost:3000/categoria.json')
        .then(res => res.json())
        .then(categorias => {
            return categorias
        })
        .catch(function (err) {
            console.error(err)
            return undefined
        })
}

export async function getCategorias() {
    return fetchCategorias()
}
