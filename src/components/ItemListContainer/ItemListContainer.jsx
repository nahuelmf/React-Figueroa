// @ts-nocheck
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';


export default function ItemListContainer(props) {



    const [data, setData] = useState ([]);

    let { categoryId } = useParams(); 
    
    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Items');

      if (categoryId) {
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
        getDocs(queryFilter)
      .then(res => setData(res.docs.map(item => ({id: item.id, ...item.data()}))))
      } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(item => ({id: item.id, ...item.data()}))))
    }
    }, [categoryId]);
  

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


