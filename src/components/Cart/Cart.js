import './Cart.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import ItemCart from '../ItemCart/ItemCart'
import { getDocs, writeBatch, query, where, collection, addDoc, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)

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

    if(getQuantity() === 0) {
        return (
            <h1>No hay productos en el carrito</h1>
        )
    } 

    return (
        <>
            <div>
                <h1>Cart</h1>
                { cart.map(p => <ItemCart key={p.id} {...p}/>) }
                {/* <ul>
                    {
                        cart.map(prod => <li key={prod.id}>Producto: {prod.name} - Cantidad: {prod.quantity} - Precio por unidad: $ {prod.price} - Subtotal: $ {prod.quantity * prod.price} <button className='btnEliminar' onClick={() => removeItem(prod.id)}>Eliminar</button></li>)
                    }
                </ul> */}
                <h3>Total: ${getTotal()}</h3> 
                <button style={{textDecoration:'none', backgroundColor: 'violet'}} onClick={() => clearCart()}>Limpiar Carrito</button>
                <button onClick={() => createOrder()}>Finalizar pedido</button>
                {/* <button style={{textDecoration:'none', backgroundColor:'greenyellow'}} onClick={() => createOrder()}>Terminar Compra</button> */}
            </div>
        </>
    )
}

export default Cart

    // const [ total, setTotal ] = useState(0)
    // useEffect(() => {
    //     const handleSuma = () => {
    //         const sumar = cart.map((saldo) => saldo.subtotal)
    //         .reduce((prev, curr) => {
    //             return prev + curr;
    //         }, 0);
    //         setTotal(sumar)
    //     };
    //     handleSuma();
    // })

    // if(cart.lenght === 0) {
    //     return (
    //         <>
    //             <h1>No hay productos agregados</h1>
    //             <button><Link to='/' style={{textDecoration:'none'}}>Ir a productos</Link></button>
    //         </>
    //     )
    // }