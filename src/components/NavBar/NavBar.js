import './NavBar.css'

const NavBar = () => {
    const estilosH1 = {
        backgroundColor: 'black',
        color: 'red'
    };
    
    const estilosDivMenu = {
        backgroundColor: 'grey',
        color: 'blue'
    };

    return(
        <header>
                <h1 style={estilosH1}>The Wine Project</h1>
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