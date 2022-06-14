//@ts-check
import React from 'react'
import './ItemListContainer.css'


export default function ItemListContainer(props) {
return(
    <div>
    <h1 className='titulo'> {props.title} </h1>
    <p className='tipografia'>{props.text} </p>
    </div>
  )
}


