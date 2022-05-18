import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (count) => {

        const productObj = {
            id, name, price, quantity: count, subtotal: price * count,
        }

        addItem(productObj)
        setNotification('success', `Se agregaron ${count} ${name} correctamente`)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className='Info'>
                    Categoría: {category}
                </p>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='itemFooter'>
                {
                    isInCart(id)
                        ? <Link to='/cart' className='irAlCarrito'>Ir al carrito</Link>
                        : <Contador initial={getQuantityProd(id)} stock={stock} onAdd={handleAdd} />
                }
                {
                    isInCart(id) ? <button><Link to='/cart' className='finalizarCompra' style={{textDecoration:'none'}}>Finalizar Compra</Link></button> : ""
                }
            </footer>
        </article>
    )
}

export default ItemDetail