//@ts-check
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    
    <div className="App">
<NavBar />
      <header className="App-header">

<ItemDetailContainer />
      </header>

    </div>
  );
}

export default App;
