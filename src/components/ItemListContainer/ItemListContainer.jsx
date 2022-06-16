//@ts-check
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'


export default function ItemListContainer(props) {
  const onAdd =(quantity) => {
alert(`Añadiste ${quantity} Remeras Roja`)
console.log(`Añadiste ${quantity} Remeras Roja`);
  }
return(
    <div>
    <h1 className='titulo'> {props.title} </h1>
    <p className='tipografia'>{props.text} </p>
    <ItemCount initial={1} stock={5} onAdd={onAdd} / >
    </div>
  )
}


