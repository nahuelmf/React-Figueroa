
import ItemDetail from './ItemDetail/ItemDetail';
import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import  './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';



export default function ItemDetailContainer() {
    const [data, setData] = useState({});
    let { detalleId } = useParams();


            useEffect(() => {
                const querydb = getFirestore();
                const queryDoc = doc(querydb, 'Items', detalleId);
                getDoc(queryDoc)
                .then(res => setData({id: res.id, ...res.data()}))
            }, [detalleId])
return (
    <div className='ItemDetailContainer-header '>
< ItemDetail data={data} />
</div>
)
}

