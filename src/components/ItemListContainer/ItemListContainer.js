import { useState, useEffect } from 'react';
import { getProducts } from '../asyncmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div>
            <h1>Lista</h1>
            {/* <h1>{props.greeting}</h1> */}
            {/* <ItemList products={products}/> */}
        </div>
        
    )
}

export default ItemListContainer;