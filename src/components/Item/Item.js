import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {

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
                <Link to={`/detalle/${id}`} /*className='Option'*/>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item

// const Item = ({name, img}) => {
//     return(
//         <section>
//             <picture>
//                 <img src={img} alt={name}/>
//             </picture>
//             <h3>{name}</h3>
//             <button>Características</button>
//         </section>
//     )
// }

// export default Item;