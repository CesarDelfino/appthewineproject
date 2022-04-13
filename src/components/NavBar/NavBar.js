import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../asyncmock';

const NavBar = (props) => {
    const [categories, setCategories] = useState([])

    const estilosH1 = {
        backgroundColor: 'black',
        color: 'red'
    };
    
    const estilosDivMenu = {
        backgroundColor: 'grey',
        color: 'blue'
    };

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return(
        <header>
            <Link to='/'>
                <h1 style={estilosH1}>The Wine Project</h1>
            </Link>
                <h2>{props.name}</h2>
                <div>
                    {/* {<button className='Option'>Tinto</button>}
                    {<button className='Option'>Blanco</button>}
                    {<button className='Option'>Rosado</button>} */}
                    {/* <Link to='/list'>List</Link>
                    <Link to='/detail'>Detalles</Link> */}
                    {/* <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Lista</NavLink>
                    <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Detalles</NavLink> */}
                    { categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`}
                        // hacer el css: className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                    >{cat.description}</NavLink>)}
                        
                </div>
                <CartWidget />
            <nav className='navegacion'>
                <ul style={estilosDivMenu} className='divMenu'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Productos</a>
                        <ul className='subMenu'>
                            <li><a href="#">Tinto</a></li>
                            <li><a href="#">Blanco</a></li>
                            <li><a href="#">Rosado</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default NavBar;