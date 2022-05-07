import './ItemCart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemCart = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio x unidad: ${price}
                </p>
            </section>
            <footer>
                <p>
                    Subtotal: ${price * quantity}
                </p>
                <button onClick={() => handleRemove(id)}>Eliminar Producto</button>
            </footer>
        </article>
    )
}

export default ItemCart