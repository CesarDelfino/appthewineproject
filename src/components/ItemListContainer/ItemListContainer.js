import { useState, useEffect } from 'react';
import { getProducts } from '../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()


    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    // const handleOnResize = (e) => {
    //     console.log(e)
    //     console.log('Cambio tamaño del ILC')
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleOnResize)
        
    //     return(() => {
    //         window.removeEventListener('resize', handleOnResize)
    //     })
    // }, [])

    const handleClick = () => {
        console.log('Hice click en ILC')
    }

    return(
        <div onClick={handleClick}>
            <h1>Lista</h1>
            { <h1>{props.greeting}</h1> }
            { <ItemList products={products}/> }
        </div> 
    )
}

export default ItemListContainer;