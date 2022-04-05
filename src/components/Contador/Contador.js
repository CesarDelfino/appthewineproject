import './Contador.css'
import { useState, useEffect } from 'react';

const Contador = (initial, stock, onAdd) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    
    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div className='divContador'>
            <button className='botonMyM' onClick={increment}>+</button>
            <p className='numCantidad'>{count}</p>
            <button className='botonMyM' onClick={decrement}>-</button>
            <button className='botonAgregar' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Contador