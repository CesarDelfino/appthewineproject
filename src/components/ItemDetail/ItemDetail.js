import './ItemDetail.css'
import ItemCount from '../Contador/Contador'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({onConfirm, stock, initial = 0}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className='divContador'>
            <button className='botonMyM' onClick={increment}>+</button>
            <p className='numCantidad'>{count}</p>
            <button className='botonMyM' onClick={decrement}>-</button>
            <button className='botonAgregar' onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const Select = ({ options = [], onSelect }) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map(o => <option key={o.id} value={o.value}>{o.text}</option>)}
        </select>
    )
}

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const options = [{id: 1, value: 1, text: 'Azul'}, {id: 2, value: 2, text: 'Rojo'}]
    const navigate = useNavigate()

    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }

    const handleSelect = (value) => {
        navigate(value)
    }

    const Count = typeInput ? ButtonCount : InputCount

    return (
        <article className='CardItem'>
            <header className='Header'>
                <button onClick={() => setTypeInput(!typeInput)}>Cambiar</button>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {/* <Select options={options} onSelect={handleSelect} /> */}
                {/* <ItemCount /> */}
                {quantity > 0 ? <Link className='irAlCarrito' to='/cart'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock} />}
            </footer>
        </article>
    )
}

export default ItemDetail