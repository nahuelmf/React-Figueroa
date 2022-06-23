
import ItemDetail from './ItemDetail/ItemDetail'
import React from 'react'
import { useState, useEffect } from 'react'


export default function ItemDetailContainer() {
    const producto = { id: 1, stock: "12", title: "REMERA KID DINOS", description:"Remera de jersey de algodón , manga corta, con estampa en el delantero", price: 1990, pictureUrl:"https://mimoar.vtexassets.com/arquivos/ids/10585229-1200-auto?v=637880588851400000&width=1200&height=auto&aspect=true"}
    const [data, setData] = useState({});

    useEffect(() => {
        const getData =new Promise(res => {
            setTimeout(() => {
                res(producto);
            }, 2000);
        });

        getData.then(res => setData(res))
    }, [])

return (
< ItemDetail data={data} />
)
}

