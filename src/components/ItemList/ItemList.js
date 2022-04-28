import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

    return(
        <div className='ListGroup' onClick={() => console.log('Hice click en IL')}>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList