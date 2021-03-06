//@ts-check
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import CartProvider from './components/CartContext/CartContext';
import CheckOut from './components/CheckOut/CheckOut';


function App() {
  return (
<>
<BrowserRouter>
<CartProvider>
<NavBar />
<header className="App-header">
<Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      <Route path='/checkout' element={<CheckOut />} />
    </Routes>
    </header>
    </CartProvider>
    </BrowserRouter >
</>
  );
}

export default App;


