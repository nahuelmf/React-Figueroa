// @ts-nocheck
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';


export default function ItemListContainer(props) {

  const productos = [
    { id: 1, title: "REMERA KID DINOS", description:"Remera de jersey de algodón , manga corta, con estampa en el delantero", category: "Remeras", price: 2590, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10818178-1200-auto?v=637900839760600000&width=1200&height=auto&aspect=true" },
    { id: 2, title: "REMERA KID ABRAZO", description:"Remera de jersey flamé, con estampa plana", category: "Remeras", price: 2390, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10816282-1200-auto?v=637900837661570000&width=1200&height=auto&aspect=true" },
    {id: 3, title:"REMERA KID MOMENTOS", description:"Remera de jersey, 50% algodón y 50% poliester con estampa plana frase en el delantero", category: "Remeras", price: 1490, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10931242-1200-auto?v=637909784271270000&width=1200&height=auto&aspect=true"},
    {id: 4 , title:"REMERA JR BAHAMAS", description:"Remera de jersey flame con detalle de Estampa 'less is more'", category: "Remeras", price: 1190 , pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10713197-1200-auto?v=637892152431930000&width=1200&height=auto&aspect=true"},
    {id: 5, title:"REMERA JR AMORE", description:"Comprando una prenda de #ModoAmor, podés aportar tu mimo a la Fundación Garrahan REMERA JR AMORE", category: "Remeras", price: 2190, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10722264-1200-auto?v=637892192021430000&width=1200&height=auto&aspect=true"},
    {id: 6, stock: 15, title:"REMERA KID MOTO", description:"Remera de jersey, con estampa plana", category: 'Remeras', price: 1990, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10936348-1200-auto?v=637909833514530000&width=1200&height=auto&aspect=true"},
    {id: 7, title:"PANTALON KID PARK", description:"Pantalón de lanilla", category: 'Pantalones', price: 2890, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10937755-1200-auto?v=637909835360030000&width=1200&height=auto&aspect=true"},
    {id: 8, title:"PANTALON MINI MINSK", description:"Pantalón de frisa melange con cintura elastizada.", category: 'Pantalones', price: 1590, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10964409-1200-auto?v=637915494335270000&width=1200&height=auto&aspect=true"},
    {id: 9, title:"PANTALON MINI PLAY", description:"Pantalón de plus con cintura elastizada.", category: 'Pantalones', price: 1390, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10958310-1200-auto?v=637915482476670000&width=1200&height=auto&aspect=true"},
    {id: 10, title:"PANTALON MINI MINSK", description:"Pantalón de frisa melange con cintura elastizada", category: 'Pantalones', price: 1390, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10962362-1200-auto?v=637915489646770000&width=1200&height=auto&aspect=true"},
    {id: 11, title:"PANTALON MINI PLAY", description:"Pantalón de plus con cintura elastizada.", category: 'Pantalones', price: 1390, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10957949-1200-auto?v=637915481938500000&width=1200&height=auto&aspect=true"},
    {id: 12, title:"JEGGING MINI WOODSTOCK", description:"Jegging de denim con elastano, tiene elástico en interior de cintura", category: 'Pantalones', price: 3990, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10962972-1200-auto?v=637915491074470000&width=1200&height=auto&aspect=true"},
    {id: 13, title:"BODY MINI SKATE", description:"Body de jersey, lleva broche arito en escote,tiene estampa plana en centro delantero", category: 'Bodys', price: 1890, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10959723-1200-auto?v=637915484778200000&width=1200&height=auto&aspect=true"},
    {id: 14, title:"BODY MINI FOREST", description:"Body de rib melange, tiene estampa plana en centro delantero", category: 'Bodys', price: 1490, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10959209-1200-auto?v=637915483876500000&width=1200&height=auto&aspect=true"},
    {id: 15, title:"BODY CAMISA MINI BASTIAN", description:"Body camisa de poplin a cuadros 100% algodón con botones en centro delantero y broches en entrepiernas", category: 'Bodys', price: 2200, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10957185-1200-auto?v=637915480364370000&width=1200&height=auto&aspect=true"},
    {id: 16, title:"BUZO KID POSITIVE", description:"Buzo de rustico, con estampa plana.", category: 'Buzos', price: 3590, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10936176-1200-auto?v=637909833422230000&width=1200&height=auto&aspect=true"},
    {id: 17, title:"BUZO MINI LUTON", description:"Buzo de frisa.", category: 'Buzos', price: 2890, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10959352-1200-auto?v=637915483980070000&width=1200&height=auto&aspect=true"},
    {id: 18, title:"BUZO MINI ESTAMPADO", description:"Buzo de frisa estampada, lleva broche arito en escote, tiene estampa con relieve en frente delantero.", category: 'Buzos', price: 3590, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10960040-1200-auto?v=637915485267170000&width=1200&height=auto&aspect=true"},
    ]

    const [data, setData] = useState ([]);

    let { categoryId } = useParams(); 
    
    useEffect(() => {
      const getData = new Promise ( res => {
        setTimeout (() => {
        res(productos);
        }, 2000);
      });

      if (categoryId) {
        getData.then(res => setData(res.filter( Remera => Remera.category === categoryId)));
      } else {
      getData.then(res => setData(res))}

    }, [categoryId])
    
return(
  <>
    <div className='ItemListContainer-header'>
      <div>
    <h1 className='titulo'> {props.title} </h1>
    <p className='tipografia'>{props.text} </p>
    <ItemList data={data} />
    </div>
    </div>
    </>
  )
}


