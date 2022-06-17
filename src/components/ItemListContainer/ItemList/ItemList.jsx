import React from 'react'
import Item from './Item/Item'


export default function ItemList({data =[] })  {
        
return (
    data.map( productos => <Item key={productos.id} info={productos}/>)
)
}
