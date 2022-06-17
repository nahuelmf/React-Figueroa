import React, {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList/Item/ItemList'
import './ItemListContainer.css'


export default function ItemListContainer(props) {

  const productos = [


    { id: 1, title: "REMERA KID DINOS", description:"Remera de jersey de algodón , manga corta, con estampa en el delantero", price: 1990, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10585229-1200-auto?v=637880588851400000&width=1200&height=auto&aspect=true" },
    { id: 2, title: "REMERA KID ABRAZO", description:"Remera de jersey flamé, con estampa plana", price: 2390, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10816282-1200-auto?v=637900837661570000&width=1200&height=auto&aspect=true" },
    {id: 3, title:"REMERA KID MOMENTOS", description:"Remera de jersey, 50% algodón y 50% poliester con estampa plana frase en el delantero", price: 1490, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10931242-1200-auto?v=637909784271270000&width=1200&height=auto&aspect=true"},
    {id: 4 , title:"REMERA JR BAHAMAS", description:"Remera de jersey flame con detalle de Estampa 'less is more'", price: 1190 , pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10713197-1200-auto?v=637892152431930000&width=1200&height=auto&aspect=true"},
    {id: 5, title:"REMERA JR AMORE", description:"Comprando una prenda de #ModoAmor, podés aportar tu mimo a la Fundación Garrahan REMERA JR AMORE", price: 2190, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10722264-1200-auto?v=637892192021430000&width=1200&height=auto&aspect=true"},
    {id: 6, title:"REMERA KID POSITIVE", description:"Remera de jersey, con estampa plana", price: 1790, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10936359-1200-auto?v=637909833519570000&width=1200&height=auto&aspect=true"},
    ]

    const [data, setData] = useState ([]);
    
    useEffect(() => {
      const getData = new Promise ( res => {
        setTimeout (() => {
        res(productos)
        }, 2000)
      });
      getData.then(res => setData(res))
    }, [])
  const onAdd =(quantity) => {
alert(`Añadiste ${quantity} Remeras`)
console.log(`Añadiste ${quantity} Remeras`);
  }
return(
  <>
    <div>
    <h1 className='titulo'> {props.title} </h1>
    <p className='tipografia'>{props.text} </p>
      <ItemList data={data} />
    </div>
    <div>
      <ItemCount initial={1} stock={5} onAdd={onAdd} / >
    </div>
    </>
  )
}


