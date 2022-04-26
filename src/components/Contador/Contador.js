import './Contador.css'
import { useState, useEffect } from 'react';

const Contador = ({stock= 0, initial= 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    // const [count, setCount] = useState(0);

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
        // setCount(count + 1)
    }
    
    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
        // setCount(count - 1)
    }

    if(stock === 0) {
        return <button className='Option' disabled >No hay stock</button>
    }

    return(
        <div className='divContador'>
            <button className='botonMyM' onClick={increment}>+</button>
            <p className='numCantidad'>{quantity}</p>
            <button className='botonMyM' onClick={decrement}>-</button>
            <button className='botonAgregar' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default Contador