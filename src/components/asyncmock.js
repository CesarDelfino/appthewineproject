const productos = [
    {
        id: '1',
        name: 'Luigi bosca',
        price: 3500,
        category: 'Tinto',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/lb-malbec-c1-619359e4bc4109550015906041734954-480-0.jpg',
        stock: 15,
        description: 'Caracteristicas del vino'
    },
    {
        id: '2',
        name: 'Misterio',
        price: 1200,
        category: 'Blanco',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/v-misterio-dulce-nat-6x7501-75c962e4015096e25d15894812820222-640-0.jpg',
        stock: 20,
        description: 'Caracteristicas del vino'
    },
    {
        id: '3',
        name: 'Trumpeter',
        price: 11900,
        category: 'Espumante',
        img: 'https://rinconelegido.com.ar/wp-content/uploads/2017/08/TRUMPETERBRUTNATURE.jpg',
        stock: 7,
        description: 'Caracteristicas del vino'
    }
]

const categories = [
    {id: 'Tinto', description: 'Tinto'},
    {id: 'Blanco', description: 'Blanco'},
    {id: 'Espumante', description: 'Espumante'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? productos.filter(prod => prod.category === categoryId) : productos)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 2000)
    })
}