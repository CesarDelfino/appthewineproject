const productos = [
    {
        id: '1',
        name: 'luigi bosca',
        price: 3500,
        category: 'vinostintos',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/lb-malbec-c1-619359e4bc4109550015906041734954-480-0.jpg',
        stock: 15,
        description: 'Caracteristicas del vino'
    },
    {
        id: '2',
        name: 'misterio',
        price: 1200,
        category: 'vinosblancos',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/v-misterio-dulce-nat-6x7501-75c962e4015096e25d15894812820222-640-0.jpg',
        stock: 20,
        description: 'Caracteristicas del vino'
    },
    {
        id: '3',
        name: 'Trapiche',
        price: 1700,
        category: 'vinostintos',
        img: 'https://www.espaciovino.com.ar/media/default/0001/59/thumb_58137_default_medium.jpeg',
        stock: 30,
        description: 'Caracteristicas del vino'
    }
]

const categories = [
    {id: 'tinto', description: 'Malbec'},
    {id: 'rosado', description: 'Pinot Noir'},
    {id: 'blanco', description: 'Dulce Natural'}
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