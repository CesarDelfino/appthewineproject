import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    
    const { getQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className='imgCarrito'>
            <img src='./imagenes/carrito.png' alt='carrito' style={{ width: 40}}/>
           { getQuantity() }
        </Link>
        
    );
}

export default CartWidget;