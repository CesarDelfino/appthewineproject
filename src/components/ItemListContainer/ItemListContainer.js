import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [productos, setProducts] = useState([])

    const { categoryId } = useParams()


    useEffect(() => {

        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'productos'), where('category', '==', categoryId))
            : collection(firestoreDb, 'productos')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productos = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(productos)
        })

    }, [categoryId])

    if(productos.lenght === 0) {
        return <h1>No hay productos</h1>
    }

    const handleClick = () => {
        console.log('Hice click en ILC')
    }

    return(
        <div onClick={handleClick}>
            <h1>Lista</h1>
            { <h1>{props.greeting}</h1> }
            { <ItemList productos={productos}/> }
        </div> 
    )
}

export default ItemListContainer;