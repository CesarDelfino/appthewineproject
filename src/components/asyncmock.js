const productos = [
    {
        id: 1,
        name: 'luigi bosca',
        price: 3500,
        category: 'tinto',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/lb-malbec-c1-619359e4bc4109550015906041734954-480-0.jpg',
        stock: 15,
        description: 'Caracteristicas del vino'
    },
    {
        id: 2,
        name: 'misterio',
        price: 1200,
        category: 'blanco',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/398/294/products/v-misterio-dulce-nat-6x7501-75c962e4015096e25d15894812820222-640-0.jpg',
        stock: 20,
        description: 'Caracteristicas del vino'
    },
    {
        id: 3,
        name: 'Trapiche',
        price: 1700,
        category: 'tinto',
        img: 'https://www.espaciovino.com.ar/media/default/0001/59/thumb_58137_default_medium.jpeg',
        stock: 30,
        description: 'Caracteristicas del vino'
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}