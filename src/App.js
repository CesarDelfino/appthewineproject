import { useState, createContext } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/Notification'

export const Context = createContext()

const App = () => {
  const [show, setShow] = useState({path: 'list', param: 1})
  const [cart, setCart] = useState([])
  console.log(cart)
 
  return (
      <div className='App'>
        <button>Ingresar</button>
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Link to='/form' className='Option'>Form</Link>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detalle/:productId' element={<ItemDetailContainer setCart={setCart} cart={cart}/>} />
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/form' element={<Form />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationProvider>
          <div>
            <button onClick={() => setShow('list')}>Lista</button>
            <button onClick={() => setShow('detail')}>Detalle</button>
          </div>
          {show === 'list' ? <ItemListContainer /> : null}
          {show === 'detail' ? <ItemDetailContainer /> : null}
      </div>
  );
}

export default App;