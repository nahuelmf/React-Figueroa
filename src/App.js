//@ts-check
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';

function App() {
  return (
<>
<BrowserRouter>
<NavBar />
<header className="App-header">
<Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
    </Routes>
    </header>
    </BrowserRouter >
</>
  );
}

export default App;


