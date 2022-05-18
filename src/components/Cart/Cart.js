import './Cart.css'
import { useContext } from 'react'
import CartContext from "../../context/CartContext"
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)

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
                <h3>Total: ${getTotal()}</h3> 
                <button className='btnLimpiar' onClick={() => clearCart()}>Limpiar Carrito</button>
                <button className='btnContinuar'><Link style={{textDecoration:'none'}} to={'/form'}>Continuar</Link></button>
            </div>
        </>
    )
}

export default Cart