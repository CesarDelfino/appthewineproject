import './Cart.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    const [ total, setTotal ] = useState(0)
    useEffect(() => {
        const handleSuma = () => {
            const sumar = cart.map((saldo) => saldo.subtotal)
            .reduce((prev, curr) => {
                return prev + curr;
            }, 0);
            setTotal(sumar)
        };
        handleSuma();
    })

    if(cart.lenght === 0) {
        return (
            <>
                <h1>No hay productos agregados</h1>
                <button><Link to='/' style={{textDecoration:'none'}}>Ir a productos</Link></button>
            </>
        )
    }

    return (
        <>
            <div>
                <h1>Cart</h1>
                <ul>
                    {
                        cart.map(prod => <li key={prod.id}>Producto: {prod.name} - Cantidad: {prod.quantity} - Precio por unidad: $ {prod.price} - Subtotal: $ {prod.quantity * prod.price} <button className='btnEliminar' onClick={() => removeItem(prod.id)}>Eliminar</button></li>)
                    }
                </ul>
                <p>Total= {total}</p>
                <button style={{textDecoration:'none', backgroundColor: 'violet'}} onClick={() => clearCart()}>Limpiar Carrito</button>
                <button><Link to='/' style={{textDecoration:'none', backgroundColor:'greenyellow'}}>Terminar Compra</Link></button>
            </div>
        </>
    )
}

export default Cart