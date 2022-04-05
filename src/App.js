import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador'
import Boton from './components/Boton/Boton'
import ClassCounter from './components/ClassCounter/ClassCounter';

const App = () => {
  const [show, setShow] = useState(true)
  const title = 'Ecommerce'

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
  }

  const miFuncion = () => {
    console.log('hice click en mi boton')
  }

  return (
      <div className='App'>
        <ItemListContainer greeting={'BIENVENIDOS A:'} />
        <NavBar name={title}/>
        <button>Ingresar</button>
        { show ? <Contador /*initial={0} stock={8}*/ onAdd={handleOnAdd}/> : null}
        {/* <ClassCounter />
        <Boton callback={miFuncion} label="Mi boton" /> */}
      </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import NavBar from './components/NavBar/NavBar';

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <NavBar />
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;
