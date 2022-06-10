//@ts-check
import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavBar from './components/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    
    <div className="App">
<NavBar />
      <header className="App-header">
<ItemListContainer />
      </header>
    </div>
  );
}

export default App;
