import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import { useParams } from "react-router-dom"
import Loader from '../loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

export const ItemListContainer = () => {

  const [ items, setItems] = useState([])
  const [loading, setLoading] =useState(true)
   

  const { categoryId } = useParams() 
  
  
  useEffect(() => {
    setLoading(true)

    const itemsRef = collection(db,'productos')
    const q = categoryId 
    ? query(itemsRef, where ('category', '==', categoryId))
    : itemsRef

    getDocs(q)
    .then((resp)=> {

      const itemsDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      console.log(itemsDB)

      setItems(itemsDB)

    })
    .finally(() =>{
      setLoading(false)
    } )
  }, [categoryId])

  return (
    <div>
      {
        loading ? <Loader />
        :<ItemList items={items}/> 
      }
    </div>
  )
}

export default ItemListContainer