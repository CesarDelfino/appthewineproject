import './ItemDetail.css'
import ItemCount from '../Contador/Contador'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount />
            </footer>
        </article>
    )
}

export default ItemDetail