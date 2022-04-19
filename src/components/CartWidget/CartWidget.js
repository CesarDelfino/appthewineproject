import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    
    const { getQuantity } = useContext(CartContext)

    return(
        <div className='imgCarrito'>
            <img src='./imagenes/carrito.png' alt='carrito' style={{ width: 40}}/>
           { getQuantity() }
        </div>
        
    )
}

export default CartWidget;