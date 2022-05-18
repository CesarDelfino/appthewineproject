import { useState, useContext } from 'react'
import CartContext from "../../context/CartContext"
import Cart from "../Cart/Cart"
import { getDocs, writeBatch, query, where, collection, addDoc, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'


const Form = () => {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    const { cart, getTotal } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    const handleKeyDown = (e) => {
        console.log(e)
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Cesar Delfino',
                phone: '222333444',
                email: 'amantedelacomidaa53@gmail.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'productos')

        const outOfStock = []   

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(firestoreDb, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({name: 'outOfStockError', productos: outOfStock})
            }
        }).then(({ id }) => {
            batch.commit()
            console.log(`El ID es ${id}`)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return <h1>Su orden está siendo generada</h1>
    }

    if (cart.length === 0) {
        return < Cart />
    }

    return (
        <div>
            <h2>Ingrese sus datos</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Mensaje'
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Nombre Completo'/>
                <button type='submit' onClick={() => createOrder()}>Finalizar pedido</button>
            </form>
        </div>
    )
}

export default Form